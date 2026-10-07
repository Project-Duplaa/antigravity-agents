/**
 * MotionKit — Master Creative Motion & Interaction Engine
 * Standalone vanilla library (zero npm required). Depend on GSAP 3.12+ & ScrollTrigger.
 * Implements tactile micro-interactions, split-text masking reveals,
 * pinned stories, interactive frame sequence scrubbers with tracking hotspots,
 * magnetic physics, and procedural Web Audio haptics.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MotionKit = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // Check prefers-reduced-motion
  var reducedMotion = false;
  if (typeof window !== 'undefined' && window.matchMedia) {
    var mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = mediaQuery.matches;
    mediaQuery.addEventListener('change', function(e) { reducedMotion = e.matches; });
  }

  // ---------------------------------------------------------------------------
  // 1. PROCEDURAL WEB AUDIO HAPTICS
  // ---------------------------------------------------------------------------
  var Haptics = {
    ctx: null,
    enabled: true,

    init: function() {
      if (!this.ctx && typeof window !== 'undefined') {
        var AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    // Dry tactile switch click (150Hz -> 40Hz in 30ms)
    click: function() {
      if (!this.enabled || reducedMotion) return;
      this.init();
      if (!this.ctx) return;
      try {
        var t = this.ctx.currentTime;
        var osc = this.ctx.createOscillator();
        var gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.frequency.setValueAtTime(160, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.035);
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

        osc.start(t);
        osc.stop(t + 0.05);
      } catch(e) {}
    },

    // Crisp aluminum snap / latch
    snap: function() {
      if (!this.enabled || reducedMotion) return;
      this.init();
      if (!this.ctx) return;
      try {
        var t = this.ctx.currentTime;
        var osc = this.ctx.createOscillator();
        var gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.frequency.setValueAtTime(2400, t);
        osc.frequency.exponentialRampToValueAtTime(140, t + 0.02);
        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

        osc.start(t);
        osc.stop(t + 0.04);
      } catch(e) {}
    },

    // Crystalline confirmation chime
    chime: function() {
      if (!this.enabled || reducedMotion) return;
      this.init();
      if (!this.ctx) return;
      try {
        var t = this.ctx.currentTime;
        var freqs = [880, 1320, 1760];
        for (var i = 0; i < freqs.length; i++) {
          var osc = this.ctx.createOscillator();
          var gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.value = freqs[i];
          osc.connect(gain);
          gain.connect(this.ctx.destination);

          var delay = i * 0.07;
          gain.gain.setValueAtTime(0, t + delay);
          gain.gain.linearRampToValueAtTime(0.05, t + delay + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.35);

          osc.start(t + delay);
          osc.stop(t + delay + 0.35);
        }
      } catch(e) {}
    }
  };

  // ---------------------------------------------------------------------------
  // 2. TEXT SPLITTING (Zero Paid Plugins)
  // ---------------------------------------------------------------------------
  function splitText(element, opts) {
    if (!element) return [];
    opts = opts || {};
    var type = opts.type || 'lines'; // 'lines', 'words', 'chars'
    var mask = opts.mask !== false;

    var text = element.textContent.trim();
    element.innerHTML = '';
    var items = [];

    if (type === 'words' || type === 'lines') {
      var words = text.split(/\s+/);
      for (var i = 0; i < words.length; i++) {
        var wordSpan = document.createElement('span');
        wordSpan.className = 'motion-split-word inline-block';
        wordSpan.textContent = words[i];

        if (mask) {
          var maskWrapper = document.createElement('span');
          maskWrapper.className = 'motion-mask-line inline-block overflow-hidden align-top';
          maskWrapper.appendChild(wordSpan);
          element.appendChild(maskWrapper);
          items.push(wordSpan);
        } else {
          element.appendChild(wordSpan);
          items.push(wordSpan);
        }

        if (i < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
      }
    } else if (type === 'chars') {
      for (var c = 0; c < text.length; c++) {
        var charSpan = document.createElement('span');
        charSpan.className = 'motion-split-char inline-block';
        charSpan.textContent = text[c] === ' ' ? '\u00A0' : text[c];

        if (mask) {
          var charMask = document.createElement('span');
          charMask.className = 'motion-mask-line inline-block overflow-hidden align-top';
          charMask.appendChild(charSpan);
          element.appendChild(charMask);
          items.push(charSpan);
        } else {
          element.appendChild(charSpan);
          items.push(charSpan);
        }
      }
    }

    return items;
  }

  // ---------------------------------------------------------------------------
  // 3. DECLARATIVE REVEAL ENGINE
  // ---------------------------------------------------------------------------
  function initReveals(scope) {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || reducedMotion) return;
    scope = scope || document;
    var elements = scope.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    ScrollTrigger.batch(elements, {
      interval: 0.08,
      batchMax: 6,
      onEnter: function(batch) {
        batch.forEach(function(el, i) {
          var animType = el.getAttribute('data-reveal') || 'fade-up';
          var delay = parseFloat(el.getAttribute('data-reveal-delay') || 0) + (i * 0.06);

          if (animType === 'mask-up') {
            gsap.fromTo(el, 
              { y: 40, opacity: 0 }, 
              { y: 0, opacity: 1, duration: 0.8, delay: delay, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
            );
          } else if (animType === 'fade-up') {
            gsap.fromTo(el, 
              { y: 30, opacity: 0 }, 
              { y: 0, opacity: 1, duration: 0.7, delay: delay, ease: 'cubic-bezier(0.22, 1, 0.36, 1)' }
            );
          } else if (animType === 'blur-in') {
            gsap.fromTo(el, 
              { opacity: 0, filter: 'blur(8px)', y: 15 }, 
              { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.75, delay: delay, ease: 'power2.out' }
            );
          } else if (animType === 'scale-in') {
            gsap.fromTo(el, 
              { opacity: 0, scale: 0.94 }, 
              { opacity: 1, scale: 1, duration: 0.65, delay: delay, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' }
            );
          }
        });
      },
      once: true
    });
  }

  // ---------------------------------------------------------------------------
  // 4. IMAGE SEQUENCE SCRUBBER CONTROLLER (Dual Engine & Manifest Handshake)
  // ---------------------------------------------------------------------------
  function imageSequence(canvas, manifestSource, opts) {
    if (!canvas) return null;
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var isReady = false;
    var images = {};
    var manifest = null;
    var currentFrame = 1;

    function parseManifest(data) {
      manifest = data;
      var totalFrames = manifest.frameCount || 48;
      var padWidth = manifest.indexPad || 4;

      // Select responsive source pattern based on viewport
      var pattern = '';
      var winW = window.innerWidth;
      if (manifest.sources && manifest.sources.length) {
        var chosen = manifest.sources[0];
        for (var s = 0; s < manifest.sources.length; s++) {
          if (winW >= manifest.sources[s].width) {
            chosen = manifest.sources[s];
          }
        }
        pattern = chosen.pattern;
      } else {
        pattern = 'frame_{index}.webp';
      }

      // Preload frames progressively (milestones first, then all)
      function loadFrame(idx, cb) {
        if (images[idx]) {
          if (cb) cb(images[idx]);
          return;
        }
        var padStr = String(idx).padStart(padWidth, '0');
        var url = pattern.replace('{index}', padStr);
        if (opts.basePath) {
          url = opts.basePath.replace(/\/$/, '') + '/' + url.replace(/^\//, '');
        }

        var img = new Image();
        img.onload = function() {
          images[idx] = img;
          if (cb) cb(img);
        };
        img.src = url;
      }

      // Initial load: frame 1 and milestones
      loadFrame(1, function() {
        renderFrame(1);
        // Preload rest in background
        for (var f = 2; f <= totalFrames; f++) {
          loadFrame(f);
        }
      });

      // Bind ScrollTrigger scrub
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !reducedMotion) {
        var triggerEl = opts.trigger || canvas.closest('section') || canvas.parentElement;
        
        ScrollTrigger.create({
          trigger: triggerEl,
          start: opts.start || 'top top',
          end: opts.end || '+=350%',
          pin: opts.pin !== false,
          scrub: opts.scrub || 0.6,
          onUpdate: function(self) {
            var fIndex = Math.min(totalFrames, Math.max(1, Math.floor(self.progress * (totalFrames - 1)) + 1));
            if (fIndex !== currentFrame) {
              currentFrame = fIndex;
              renderFrame(fIndex);
              updateHotspots(fIndex);
              updateChapters(fIndex);
            }
          }
        });
      }
    }

    function renderFrame(idx) {
      var img = images[idx] || images[1];
      if (!img || !img.complete) return;

      // DPR-aware sizing
      var dpr = window.devicePixelRatio || 1;
      var w = canvas.clientWidth;
      var h = canvas.clientHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      // Contain fit
      var imgAspect = img.width / img.height;
      var canvasAspect = w / h;
      var drawW, drawH, drawX, drawY;

      if (canvasAspect > imgAspect) {
        drawH = h;
        drawW = h * imgAspect;
        drawX = (w - drawW) / 2;
        drawY = 0;
      } else {
        drawW = w;
        drawH = w / imgAspect;
        drawX = 0;
        drawY = (h - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    }

    function updateHotspots(fIndex) {
      if (!manifest || !manifest.hotspots) return;
      var w = canvas.clientWidth;
      var h = canvas.clientHeight;

      for (var i = 0; i < manifest.hotspots.length; i++) {
        var hmeta = manifest.hotspots[i];
        var el = document.getElementById('hotspot-' + hmeta.id);
        if (!el || !hmeta.track || !hmeta.track[fIndex - 1]) continue;

        var coords = hmeta.track[fIndex - 1]; // [norm_x, norm_y, visible]
        var nx = coords[0];
        var ny = coords[1];
        var vis = coords[2];

        if (vis && nx >= 0.05 && nx <= 0.95 && ny >= 0.05 && ny <= 0.95) {
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
          el.style.transform = 'translate3d(' + (nx * w) + 'px, ' + (ny * h) + 'px, 0)';
        } else {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        }
      }
    }

    function updateChapters(fIndex) {
      if (!manifest || !manifest.chapters) return;
      for (var c = 0; c < manifest.chapters.length; c++) {
        var ch = manifest.chapters[c];
        var badge = document.getElementById('chapter-' + ch.id);
        if (!badge) continue;
        if (fIndex >= ch.start && fIndex <= ch.end) {
          badge.classList.add('is-active', 'text-cryo', 'border-cryo/40');
        } else {
          badge.classList.remove('is-active', 'text-cryo', 'border-cryo/40');
        }
      }
    }

    // Load Manifest (Object or URL)
    if (typeof manifestSource === 'object') {
      parseManifest(manifestSource);
    } else if (typeof manifestSource === 'string') {
      if (typeof fetch !== 'undefined' && location.protocol !== 'file:') {
        fetch(manifestSource)
          .then(function(r) { return r.json(); })
          .then(parseManifest)
          .catch(function(err) {
            console.warn('Manifest fetch failed, checking fallback inline payload:', err);
          });
      }
    }

    return {
      renderFrame: renderFrame,
      getCurrentFrame: function() { return currentFrame; }
    };
  }

  // ---------------------------------------------------------------------------
  // 5. TACTILE INTERACTIONS: MAGNETIC & 3D TILT
  // ---------------------------------------------------------------------------
  function initMagnetic(scope) {
    if (reducedMotion || typeof gsap === 'undefined') return;
    scope = scope || document;
    var elements = scope.querySelectorAll('[data-magnetic]');

    elements.forEach(function(el) {
      var strength = parseFloat(el.getAttribute('data-magnetic-strength') || 0.35);
      
      el.addEventListener('mousemove', function(e) {
        var rect = el.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) * strength;
        var dy = (e.clientY - cy) * strength;

        gsap.to(el, {
          x: dx,
          y: dy,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      el.addEventListener('mouseleave', function() {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
        });
      });
    });
  }

  function initTilt(scope) {
    if (reducedMotion || typeof gsap === 'undefined') return;
    scope = scope || document;
    var elements = scope.querySelectorAll('[data-tilt]');

    elements.forEach(function(el) {
      var maxAngle = parseFloat(el.getAttribute('data-tilt-max') || 5.0);

      el.addEventListener('mousemove', function(e) {
        var rect = el.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(el, {
          rotateY: x * maxAngle,
          rotateX: -y * maxAngle,
          transformPerspective: 1000,
          duration: 0.35,
          ease: 'power2.out'
        });
      });

      el.addEventListener('mouseleave', function() {
        gsap.to(el, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
        });
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 6. NUMERIC COUNTERS (Odometers)
  // ---------------------------------------------------------------------------
  function initCounters(scope) {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    scope = scope || document;
    var elements = scope.querySelectorAll('[data-count-to]');

    elements.forEach(function(el) {
      var target = parseFloat(el.getAttribute('data-count-to') || 0);
      var suffix = el.getAttribute('data-count-suffix') || '';
      var prefix = el.getAttribute('data-count-prefix') || '';
      var decimals = parseInt(el.getAttribute('data-count-decimals') || 0, 10);

      var obj = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: function() {
          gsap.to(obj, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: function() {
              el.textContent = prefix + obj.val.toFixed(decimals) + suffix;
            }
          });
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 7. CINEMATIC BOOT SEQUENCE ORCHESTRATOR
  // ---------------------------------------------------------------------------
  function bootSequence(opts) {
    opts = opts || {};
    var veil = opts.veil || document.getElementById('intro-loader');
    if (!veil || reducedMotion) {
      if (veil) veil.remove();
      if (opts.onComplete) opts.onComplete();
      return;
    }

    var tl = gsap.timeline({
      onComplete: function() {
        Haptics.chime();
        gsap.to(veil, {
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: function() {
            veil.remove();
            if (opts.onComplete) opts.onComplete();
          }
        });
      }
    });

    // Animate inner progress if present
    var progressLine = veil.querySelector('.boot-progress-bar');
    if (progressLine) {
      tl.fromTo(progressLine, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'power2.inOut' });
    }

    return tl;
  }

  // ---------------------------------------------------------------------------
  // PUBLIC API
  // ---------------------------------------------------------------------------
  var MotionKit = {
    haptics: Haptics,
    splitText: splitText,
    imageSequence: imageSequence,
    bootSequence: bootSequence,

    init: function(scope) {
      initReveals(scope);
      initMagnetic(scope);
      initTilt(scope);
      initCounters(scope);

      // Bind global tactile click sounds
      if (typeof document !== 'undefined') {
        document.addEventListener('click', function(e) {
          if (e.target.closest('button, a, .tactile-click, [data-haptic="click"]')) {
            Haptics.click();
          }
        });
      }
    }
  };

  // Auto-init on DOMContentLoaded
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
      MotionKit.init();
    });
  }

  return MotionKit;
}));
