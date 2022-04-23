<!-- PROJECT LOGO -->
  <h3 align="center">Image Title and Mockup Generator</h3>

![alt text](https://i.etsystatic.com/34379899/r/il/1486ee/3767068935/il_1140xN.3767068935_8jiq.jpg)
## Image Title

image-title.py script will position an image title and subtitle taking as input the image name. For the image example would be "Matterhorn Switzerland.jpeg".

It will also generate different image ratios, from a 2x3 image it will factor the image height and cropped it.
* 2x3
* 3x4
* 4x5
* 5x7
* 11x14

## Mockup

To generate several mockups with Photoshop you need to place your input image in "./assets/_input files" folder and your mockups "./assets". Then rename the smart layer in Photoshop to match the current definition from the main JS file, you can add as many as you want.


```
mockups([
// Mockup #1
{
  output: output, 
  mockupPath: '$/assets/M1.psd', 
  smartObjects: [
    
    // Smart object #1
    {
      target: '@screen',
      input: [
        './_input files'
      ], 
      inputNested: true,
      align: 'center center',
      resize: 'fill', 
    },
}
```
