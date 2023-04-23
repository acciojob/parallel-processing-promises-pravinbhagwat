//your JS code here. If required.
const images = [
        { url: 'https://picsum.photos/id/237/200/300' },
        { url: 'https://picsum.photos/id/238/200/300' },
        { url: 'https://picsum.photos/id/239/200/300' },
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

const button = document.getElementById('download-images-button');
button.addEventListener('click', downloadImages);
