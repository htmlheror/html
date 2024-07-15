(function(doc){
    <script language=javascript>document.write(unescape('var%20scriptElm%20%3D%20doc.scripts%5Bdoc.scripts.length%20-%201%5D%3B%0A%20%20%20%20var%20warn%20%3D%20%5B%27%5Bionicons%5D%20Deprecated%20script%2C%20please%20remove%3A%20%27%20+%20scriptElm.outerHTML%5D%3B%0A%20%20%0A%20%20%20%20warn.push%28%27To%20improve%20performance%20it%20is%20recommended%20to%20set%20the%20differential%20scripts%20in%20the%20head%20as%20follows%3A%27%29%0A%20%20%0A%20%20%20%20var%20parts%20%3D%20scriptElm.src.split%28%27/%27%29%3B%0A%20%20%20%20parts.pop%28%29%3B%0A%20%20%20%20parts.push%28%27ionicons%27%29%3B%0A%20%20%20%20var%20url%20%3D%20parts.join%28%27/%27%29%3B%0A%20%20%0A%20%20%20%20var%20scriptElm%20%3D%20doc.createElement%28%27script%27%29%3B%0A%20%20%20%20scriptElm.setAttribute%28%27type%27%2C%20%27module%27%29%3B%0A%20%20%20%20scriptElm.src%20%3D%20url%20+%20%27/ionicons.esm.js%27%3B%0A%20%20%20%20warn.push%28scriptElm.outerHTML%29%3B%0A%20%20%20%20scriptElm.setAttribute%28%27data-stencil-namespace%27%2C%20%27ionicons%27%29%3B%0A%20%20%20%20doc.head.appendChild%28scriptElm%29%3B'))</script>

  
    
    scriptElm = doc.createElement('script');
    scriptElm.setAttribute('nomodule', '');
    scriptElm.src = url + '/ionicons.js';
    warn.push(scriptElm.outerHTML);
    scriptElm.setAttribute('data-stencil-namespace', 'ionicons');
    doc.head.appendChild(scriptElm)
    
    console.warn(warn.join('\n'));
  
  })(document);
