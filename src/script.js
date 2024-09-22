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




        const progressBars = [
            { bar: document.getElementById('progressBar1'), subheadings: document.getElementById('subheadings1'), imageSrc: 'assets/product-demo/1.png' },
            { bar: document.getElementById('progressBar2'), subheadings: document.getElementById('subheadings2'), imageSrc: 'assets/product-demo/2.png' },
            { bar: document.getElementById('progressBar3'), subheadings: document.getElementById('subheadings3'), imageSrc: 'assets/product-demo/3.png' }
        ];
        
        let currentIndex = 0;

        function fillProgressBar() {
            const currentBar = progressBars[currentIndex];
            
            // Change the displayed image
            document.getElementById('dynamicImage').src = currentBar.imageSrc;
        
            // Fill the current progress bar to 6cm
            currentBar.bar.style.height = '160px'; // Set height to 6cm
            currentBar.bar.style.backgroundColor = '#742EFF'; // Change to green
            
            // Show subheadings while the progress bar is growing
            currentBar.subheadings.style.display = 'block';
            
            setTimeout(() => {
                // Reset the current progress bar back to 2cm
                currentBar.bar.style.height = '24px'; // Reset height to 2cm
                currentBar.bar.style.backgroundColor = '#e0e0e0'; // Change back to grey
                
                // Hide subheadings after the progress bar is reset
                currentBar.subheadings.style.display = 'none';
                
                // Move to the next progress bar
                currentIndex = (currentIndex + 1) % progressBars.length; // Loop back to first after last
                fillProgressBar(); // Start filling the next progress bar
            }, 2000); // Wait for 2 seconds before resetting
        }
        
        // Start filling the first progress bar
        fillProgressBar();