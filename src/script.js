let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.classList.add('hidden');
            } else {
                // Scrolling up
                navbar.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });


        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector("ul.marquee-content");
        
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);
        
        for(let i=0; i<marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }