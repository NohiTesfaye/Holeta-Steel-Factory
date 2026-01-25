// ===== BEAUTIFUL LOADING SCREEN =====
function simulateLoading() {
  const loadingScreen = document.querySelector('.loading-screen');
  const progressFill = document.querySelector('.progress-fill');
  const progressPercentage = document.querySelector('.progress-percentage');
  const stats = document.querySelectorAll('.loading-stats .stat');
  
  let progress = 0;
  const totalTime = 2000; // 2 seconds
  const intervalTime = 30;
  const increment = (100 * intervalTime) / totalTime;
  
  const progressInterval = setInterval(() => {
    progress += increment;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
      
      // Update stats with completion
      stats.forEach((stat, index) => {
        setTimeout(() => {
          const icon = stat.querySelector('i');
          const text = stat.querySelector('span');
          icon.className = 'fas fa-check-circle';
          icon.style.color = '#4CAF50';
          text.textContent = 'Completed';
          stat.style.opacity = '1';
          stat.style.animation = 'none';
        }, index * 200);
      });
      
      // Hide loading screen after completion
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        
        // Trigger other animations
        animateCounter();
        initializeGallery();
      }, 800);
    }
    
    // Update progress bar
    progressFill.style.width = `${progress}%`;
    progressPercentage.textContent = `${Math.round(progress)}%`;
    
    // Update stats text based on progress
    if (progress < 30) {
      stats[0].querySelector('span').textContent = 'Initializing Machinery';
      stats[1].querySelector('span').textContent = 'Preparing Furnaces';
      stats[2].querySelector('span').textContent = 'Loading Materials';
    } else if (progress < 60) {
      stats[0].querySelector('span').textContent = 'Processing Steel';
      stats[1].querySelector('span').textContent = 'Heating to 1500°C';
      stats[2].querySelector('span').textContent = 'Quality Testing';
    } else if (progress < 90) {
      stats[0].querySelector('span').textContent = 'Cooling Process';
      stats[1].querySelector('span').textContent = 'Final Shaping';
      stats[2].querySelector('span').textContent = 'Final Inspection';
    }
    
  }, intervalTime);
}

// Start loading simulation when page loads
window.addEventListener('load', function() {
  // Start the beautiful loading animation
  simulateLoading();
});
$(document).ready(function() {
    // Remove loading screen
    setTimeout(function() {
        $('.loading-screen').fadeOut();
    }, 2000);
    
    // Mobile menu toggle
    $('#menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('.menu-links').toggleClass('active');
    });
    
    // Close mobile menu when clicking a link
    $('.menu-links a').click(function() {
        $('#menu-toggle').removeClass('active');
        $('.menu-links').removeClass('active');
    });
    
    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#site-header').addClass('scrolled');
        } else {
            $('#site-header').removeClass('scrolled');
        }
        
        // Back to top button visibility
        if ($(this).scrollTop() > 300) {
            $('#gotop').addClass('visible');
        } else {
            $('#gotop').removeClass('visible');
        }
    });
    
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    // Banner Swiper
    const bannerSwiper = new Swiper('.banner-swiper', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    
    // Counter animation
    function animateCounter() {
        $('.counter').each(function() {
            var $this = $(this);
            var countTo = $this.attr('data-count');
            var duration = parseInt($this.attr('data-duration')) || 2000;
            
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: duration,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
    
    // Animate counters when in viewport
    var counted = false;
    $(window).scroll(function() {
        var oTop = $('.stats-section').offset().top - window.innerHeight;
        if (!counted && $(window).scrollTop() > oTop) {
            animateCounter();
            counted = true;
        }
    });
    
    // Product category filter
    $('.category-btn').click(function() {
        var category = $(this).data('category');
        
        // Update active button
        $('.category-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter products
        if (category === 'all') {
            $('.product-item').fadeIn(300);
        } else {
            $('.product-item').each(function() {
                if ($(this).data('category') === category) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });
    
    // Gallery filter
    $('.gallery-filter-btn').click(function() {
        var filter = $(this).data('filter');
        
        // Update active button
        $('.gallery-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter gallery items
        if (filter === 'all') {
            $('.gallery-item').fadeIn(300);
        } else {
            $('.gallery-item').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).fadeIn(300);
                } else {
                    $(this).fadeOut(300);
                }
            });
        }
    });
	document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded successfully!');
  
  // ===== LOADING SCREEN =====
  window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
    }, 1000);
  });

  // ===== MENU TOGGLE =====
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelector('.menu-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      menuLinks.classList.toggle('active');
    });
  }

  // Close menu when clicking a link
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle) menuToggle.classList.remove('active');
      menuLinks.classList.remove('active');
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (menuToggle) menuToggle.classList.remove('active');
        if (menuLinks) menuLinks.classList.remove('active');
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== MODAL FUNCTIONALITY - FIXED VERSION =====
  console.log('Setting up modal functionality...');
  
  // Function to open modal
  function openModal(modalId) {
    console.log('Opening modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      console.log('Modal opened successfully');
    } else {
      console.error('Modal not found:', modalId);
    }
  }

  // Function to close modal
  function closeModal(modal) {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  // Attach click events to all Read More buttons
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const modalId = this.getAttribute('data-modal');
      console.log('Read More clicked, modal:', modalId);
      openModal(modalId);
    });
  });

  // Attach click events to all View Details buttons (image overlay)
  document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const productItem = this.closest('.product-item');
      const modalId = productItem.getAttribute('data-modal');
      console.log('View Details clicked, modal:', modalId);
      openModal(modalId);
    });
  });

  // Make footer product links open modals too
  document.querySelectorAll('a[data-modal]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Close modal when clicking X
  document.querySelectorAll('.close-modal').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.product-modal');
      closeModal(modal);
    });
  });

  // Close modal when clicking outside content
  document.querySelectorAll('.product-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal(this);
      }
    });
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.product-modal').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  // ===== SWIPER INITIALIZATION =====
  if (document.querySelector('.banner-swiper')) {
    const swiper = new Swiper('.banner-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    console.log('Swiper initialized');
  }

  // ===== COUNTER ANIMATION =====
  function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCount();
    });
  }

  // Trigger counter animation when in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // ===== PRODUCT FILTER =====
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      const products = document.querySelectorAll('.product-item');
      
      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'block';
          setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'scale(1)';
          }, 10);
        } else {
          product.style.opacity = '0';
          product.style.transform = 'scale(0.8)';
          setTimeout(() => {
            product.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ===== GALLERY FILTER =====
  document.querySelectorAll('.gallery-filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ===== CONTACT FORM SUBMISSION =====
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const phone = this.querySelector('input[type="tel"]').value;
      const product = this.querySelector('select').value;
      
      // Show success message
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
      submitBtn.disabled = true;
      
      // Reset form
      this.reset();
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show thank you message
        alert(`Thank you ${name}! We have received your request for ${product}. We will call you at ${phone} shortly.`);
      }, 3000);
    });
  }

  // ===== BACK TO TOP =====
  const backToTop = document.getElementById('gotop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== MAKE ALL QUOTE BUTTONS WORK =====
  document.querySelectorAll('.quote-btn, .contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close any open modal
        document.querySelectorAll('.product-modal').forEach(modal => {
          modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
        
        // Smooth scroll to contact form
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('All scripts initialized successfully');
});

    
    // Product modal functionality
    $('.read-more-btn, .view-btn, .product-image, .footer-col a[data-modal]').click(function(e) {
        e.preventDefault();
        
        var modalId = $(this).data('modal');
        if (modalId) {
            $('#' + modalId).fadeIn();
            $('body').css('overflow', 'hidden');
        }
    });
    
    // Close modal
    $('.close-modal').click(function() {
        $(this).closest('.product-modal').fadeOut();
        $('body').css('overflow', 'auto');
    });
    
    // Close modal when clicking outside
    $(window).click(function(e) {
        if ($(e.target).hasClass('product-modal')) {
            $(e.target).fadeOut();
            $('body').css('overflow', 'auto');
        }
    });
    
    // Gallery image modal
    $('.gallery-item').click(function() {
        var imgSrc = $(this).find('img').attr('src');
        var title = $(this).find('h4').text();
        var desc = $(this).find('p').text();
        
        var modalHtml = `
            <div class="product-modal" id="galleryModal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <div class="modal-body">
                        <img src="${imgSrc}" alt="${title}" style="width:100%; border-radius:15px;">
                        <h3>${title}</h3>
                        <p>${desc}</p>
                    </div>
                </div>
            </div>
        `;
        
        $('body').append(modalHtml);
        $('#galleryModal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    
    // Contact form submission
    $('#quoteForm').submit(function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: $(this).find('input[type="text"]').val(),
            phone: $(this).find('input[type="tel"]').val(),
            email: $(this).find('input[type="email"]').val(),
            product: $(this).find('select').val(),
            message: $(this).find('textarea').val()
        };
        
        // Simple validation
        if (!formData.name || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Show success message
        alert('Thank you for your request! We will contact you within 24 hours.');
        
        // Reset form
        $(this)[0].reset();
        
        // In a real application, you would send the data to a server here
        console.log('Quote request:', formData);
    });
    
    // Color selection
    $('.color-item').click(function() {
        var colorName = $(this).data('color');
        var colorSample = $(this).find('.color-sample').css('background-color');
        
        // Update active color
        $('.color-item').removeClass('active');
        $(this).addClass('active');
        
        // Show notification
        showNotification('Selected color: ' + $(this).find('h4').text());
    });
    
    // Notification system
    function showNotification(message) {
        var notification = $('<div class="notification"></div>')
            .text(message)
            .hide()
            .appendTo('body');
        
        notification.css({
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: '#27ae60',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '8px',
            zIndex: '9999',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            maxWidth: '300px'
        });
        
        notification.fadeIn().delay(3000).fadeOut(function() {
            $(this).remove();
        });
    }
    
    // Thumbnail switching in modal
    $(document).on('click', '.thumbnails img', function() {
        var mainSrc = $(this).attr('src');
        $(this).closest('.modal-gallery').find('.main-image').attr('src', mainSrc);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    
    // Initialize first thumbnail as active
    $('.thumbnails img:first-child').addClass('active');
    
    // Form input focus effects
    $('.form-group input, .form-group select, .form-group textarea').focus(function() {
        $(this).parent().addClass('focused');
    }).blur(function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    }
    
    $(window).scroll(animateOnScroll);
    animateOnScroll(); // Initial check
    
    // Parallax effect for banner
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        $('.banner-content').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
    });
    
    // Product hover effects
    $('.product-item').hover(
        function() {
            $(this).find('.product-image img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.product-image img').css('transform', 'scale(1)');
        }
    );
    
    // Social media share buttons
    $('.social-links a').click(function(e) {
        e.preventDefault();
        var platform = $(this).find('i').attr('class').split('-')[1];
        var url = window.location.href;
        var title = document.title;
        
        var shareUrls = {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
            telegram: 'https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title),
            whatsapp: 'https://wa.me/?text=' + encodeURIComponent(title + ' ' + url),
            youtube: 'https://www.youtube.com/'
        };
        
        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    });
});
