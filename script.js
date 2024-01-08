// const generateForm = document.querySelector(".generate-form");
// const generateBtn = generateForm.querySelector(".generate-btn");
// const imageGallery = document.querySelector(".image-gallery");

// // const OPENAI_API_KEY = "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";
// const OPENAI_API_KEY = "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";
// // Your OpenAI API key here
// let isImageGenerating = false;

// const updateImageCard = (imgDataArray) => {
//   imgDataArray.forEach((imgObject, index) => {
//     const imgCard = imageGallery.querySelectorAll(".img-card")[index];
//     const imgElement = imgCard.querySelector("img");
//     const downloadBtn = imgCard.querySelector(".download-btn");
    
//     // Set the image source to the AI-generated image data
//     const aiGeneratedImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
//     imgElement.src = aiGeneratedImage;
    
//     // When the image is loaded, remove the loading class and set download attributes
//     imgElement.onload = () => {
//       imgCard.classList.remove("loading");
//       downloadBtn.setAttribute("href", aiGeneratedImage);
//       downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
//     }
//   });
// }

// const generateAiImages = async (userPrompt, userImgQuantity) => {
//   try {
//     // Send a request to the OpenAI API to generate images based on user inputs
//     const response = await fetch("https://api.openai.com/v1/images/generations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         prompt: userPrompt,
//         n: userImgQuantity,
//         size: "512x512",
//         response_format: "b64_json"
//       }),
//     });

//     // Throw an error message if the API response is unsuccessful
//     // if(!response.ok) throw new Error("Failed to generate AI images. Make sure your API key is valid.");

//     const { data } = await response.json(); // Get data from the response
//     updateImageCard([...data]);
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     generateBtn.removeAttribute("disabled");
//     generateBtn.innerText = "Generate";
//     isImageGenerating = false;
//   }
// }

// const handleImageGeneration = (e) => {
//   e.preventDefault();
//   if(isImageGenerating) return;

//   // Get user input and image quantity values
//   const userPrompt = e.srcElement[0].value;
//   const userImgQuantity = parseInt(e.srcElement[1].value);
  
//   // Disable the generate button, update its text, and set the flag
//   generateBtn.setAttribute("disabled", true);
//   generateBtn.innerText = "Generating";
//   isImageGenerating = true;
  
//   // Creating HTML markup for image cards with loading state
//   const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
//       `<div class="img-card loading">
//         <img src="images/loader.svg" alt="AI generated image">
//         <a class="download-btn" href="#">
//           <img src="images/download.svg" alt="download icon">
//         </a>
//       </div>`
//   ).join("");

//   imageGallery.innerHTML = imgCardMarkup;
//   generateAiImages(userPrompt, userImgQuantity);
// }

// generateForm.addEventListener("submit", handleImageGeneration);


// const OPENAI_API_KEY = "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";

// const generateForm = document.querySelector(".generate-form");
// const generateBtn = generateForm.querySelector(".generate-btn");
// const imageGallery = document.querySelector(".image-gallery");

// let isImageGenerating = false;

// const updateImageCard = (imgDataArray) => {
//   imgDataArray.forEach((imgObject, index) => {
//     const imgCard = imageGallery.querySelectorAll(".img-card")[index];
//     const imgElement = imgCard.querySelector("img");
//     const downloadBtn = imgCard.querySelector(".download-btn");

//     const aiGeneratedImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
//     imgElement.src = aiGeneratedImage;

//     imgElement.onload = () => {
//       imgCard.classList.remove("loading");
//       downloadBtn.setAttribute("href", aiGeneratedImage);
//       downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
//     };
//   });
// };

// const generateAiImages = async (userPrompt, userImgQuantity) => {
//   try {
//     const response = await fetch("https://api.openai.com/v1/images/generations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         prompt: userPrompt,
//         n: userImgQuantity,
//         size: "512x512",
//         response_format: "url",
//       }),
//     });

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       throw new Error(`Failed to generate AI images: ${errorResponse.error.message}`);
//     }

//     const { data } = await response.json();
//     updateImageCard([...data]);
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     generateBtn.removeAttribute("disabled");
//     generateBtn.innerText = "Generate";
//     isImageGenerating = false;
//   }
// };

// const handleImageGeneration = async (e) => {
//   e.preventDefault();
//   if (isImageGenerating) return;

//   const userPrompt = e.srcElement[0].value;
//   const userImgQuantity = parseInt(e.srcElement[1].value);

//   generateBtn.setAttribute("disabled", true);
//   generateBtn.innerText = "Generating";
//   isImageGenerating = true;

//   const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
//     `<div class="img-card loading">
//       <img src="images/loader.svg" alt="AI generated image">
//       <a class="download-btn" href="#">
//         <img src="images/download.svg" alt="download icon">
//       </a>
//     </div>`
//   ).join("");

//   imageGallery.innerHTML = imgCardMarkup;
//   await generateAiImages(userPrompt, userImgQuantity);
// };

// generateForm.addEventListener("submit", handleImageGeneration);














// const OPENAI_API_KEY = "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";

// const generateForm = document.querySelector(".generate-form");
// const generateBtn = generateForm.querySelector(".generate-btn");
// const imageGallery = document.querySelector(".image-gallery");

// let isImageGenerating = false;

// const updateImageCard = (imgURLArray) => {
//   imgURLArray.forEach((imgURL, index) => {
//     const imgCard = imageGallery.querySelectorAll(".img-card")[index];
//     const imgElement = imgCard.querySelector("img");
//     const downloadBtn = imgCard.querySelector(".download-btn");

//     // Assuming the response is in URL format
//     const aiGeneratedImage = imgURL;
//     imgElement.src = aiGeneratedImage;

//     imgElement.onload = () => {
//       imgCard.classList.remove("loading");
//       downloadBtn.setAttribute("href", aiGeneratedImage);
//       downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
//     };
//   });
// };

// const generateAiImages = async (userPrompt, userImgQuantity) => {
//   try {
//     const response = await fetch("https://api.openai.com/v1/images/generations", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         prompt: userPrompt,
//         max_tokens: 50,  // Adjust as needed
//         n: userImgQuantity,
//       }),
//     });

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       throw new Error(`Failed to generate AI images: ${errorResponse.error.message}`);
//     }

//     const { choices } = await response.json();
//     const imageURLs = choices.map(choice => choice.text.trim());
//     updateImageCard(imageURLs);
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     generateBtn.removeAttribute("disabled");
//     generateBtn.innerText = "Generate";
//     isImageGenerating = false;
//   }
// };

// const handleImageGeneration = async (e) => {
//   e.preventDefault();
//   if (isImageGenerating) return;

//   const userPrompt = e.srcElement[0].value;
//   const userImgQuantity = parseInt(e.srcElement[1].value);

//   generateBtn.setAttribute("disabled", true);
//   generateBtn.innerText = "Generating";
//   isImageGenerating = true;

//   const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
//     `<div class="img-card loading">
//       <img src="images/loader.svg" alt="AI generated image">
//       <a class="download-btn" href="#">
//         <img src="images/download.svg" alt="download icon">
//       </a>
//     </div>`
//   ).join("");

//   imageGallery.innerHTML = imgCardMarkup;
//   await generateAiImages(userPrompt, userImgQuantity);
// };

// generateForm.addEventListener("submit", handleImageGeneration);











const generateForm = document.querySelector(".generate-form");
const generateBtn = generateForm.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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";
let isImageGenerating = false;

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = imageGallery.querySelectorAll(".img-card")[index];
    const imgElement = imgCard.querySelector("img");
    const downloadBtn = imgCard.querySelector(".download-btn");
    
    // Set the image source to the AI-generated image data
    const aiGeneratedImage = `data:image/jpeg;base64,${imgObject.b64_json}`;
    imgElement.src = aiGeneratedImage;
    
    // When the image is loaded, remove the loading class and set download attributes
    imgElement.onload = () => {
      imgCard.classList.remove("loading");
      downloadBtn.setAttribute("href", aiGeneratedImage);
      downloadBtn.setAttribute("download", `${new Date().getTime()}.jpg`);
    }
  });
}

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    // Send a request to the OpenAI API to generate images based on user inputs
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: userPrompt,
        n: userImgQuantity,
        size: "512x512",
        response_format: "b64_json"
      }),
    });

    // Throw an error message if the API response is unsuccessful
    if(!response.ok) throw new Error("Failed to generate AI images. Make sure your API key is valid.");

    const { data } = await response.json(); // Get data from the response
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  } finally {
    generateBtn.removeAttribute("disabled");
    generateBtn.innerText = "Generate";
    isImageGenerating = false;
  }
}

const handleImageGeneration = (e) => {
  e.preventDefault();
  if(isImageGenerating) return;

  // Get user input and image quantity values
  const userPrompt = e.srcElement[0].value;
  const userImgQuantity = parseInt(e.srcElement[1].value);
  
  // Disable the generate button, update its text, and set the flag
  generateBtn.setAttribute("disabled", true);
  generateBtn.innerText = "Generating";
  isImageGenerating = true;
  
  // Creating HTML markup for image cards with loading state
  const imgCardMarkup = Array.from({ length: userImgQuantity }, () => 
      `<div class="img-card loading">
        <img src="images/loader.svg" alt="AI generated image">
        <a class="download-btn" href="#">
          <img src="images/download.svg" alt="download icon">
        </a>
      </div>`
  ).join("");

  imageGallery.innerHTML = imgCardMarkup;
  generateAiImages(userPrompt, userImgQuantity);
}

generateForm.addEventListener("submit", handleImageGeneration);