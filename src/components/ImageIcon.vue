<template>
  <div :style="{
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
    height: size,
    width: size,
    border: border,
    borderRadius: borderRadius
  }">
    <span :style="{
      ...icons[type],
      display: 'block',
      height: iconSize,
      width: iconSize,
    }" />
  </div>
</template>

<script>
 export default {
   name: "ImageIcon",
   data() {
     return {
       icons: {
         location: { backgroundImage: 'url(' + require('../static/images/icons3.png') + ')', backgroundPosition: "-465px -180px"},
         plus: { backgroundImage: 'url(' + require('../static/images/icons3.png') + ')', backgroundPosition: "-440px -234px"},
         previous: { backgroundImage: 'url(' + require('../static/images/icons2.png') + ')', backgroundPosition: "-130px -98px"},
         next: { backgroundImage: 'url(' + require('../static/images/icons2.png') + ')', backgroundPosition: "-162px -98px"},
         sidecar: { backgroundImage: 'url(' + require('../static/images/icons.png') + ')' },
         video: { backgroundImage: 'url(' + require('../static/images/icons.png') + ')', backgroundPosition: "0 -34px"},
       }
     }
   },
   props: {
     type: String,
     justifyContent: {
       default: "center"
     },
     alignItems: {
       default: "center"
     },
     size: {
       default: "44px"
     },
     iconSize: {
       default: "26px"
     },
     border: {
       default: "none"
     },
     borderRadius: {
       default: "50%"
     },
   },
 }
</script>