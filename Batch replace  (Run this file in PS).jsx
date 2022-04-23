
#include "script/Batch Mockup Smart Object Replacement.jsx" 

var output = {
  path: './_output files', // Outputs next to the mockup psd
  format: 'jpg', // 'jpg', 'png', 'tif', 'psd', 'pdf'
  filename: '@mockup - @input', 
};

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
      
      // You could have more smart objects per mockup file...
      // {},
      
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M2.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M3.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M4.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M5.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M6.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M7.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M8.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M9.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M10.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M11.psd', 
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
    ]
  },
  {
    output: output, 
    mockupPath: '$/assets/M12.psd', 
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
    ]
  },

    
]);

