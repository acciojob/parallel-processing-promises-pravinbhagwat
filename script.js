//your JS code here. If required.
const images = [
        { url: 'https://picsum.photos/id/1000/500/500' },
        { url: 'https://picsum.photos/id/1001/500/500' },
        { url: 'https://picsum.photos/id/1002/500/500' },
        { url: 'https://picsum.photos/id/1003/500/500' },
        { url: 'https://picsum.photos/id/1004/500/500' }
      ];

      function downloadImages() {
        // Create an array of promises to download each image
        const promises = images.map(image => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
            img.src = image.url;
          });
        });

        // Use Promise.all to download all the images in parallel
        Promise.all(promises)
          .then(images => {
            // Display the downloaded images on the webpage
            const output = document.getElementById('output');
            images.forEach(img => {
              output.appendChild(img);
            });
          })
          .catch(error => {
            console.error(error);
          });
      }

downloadImages();
      
