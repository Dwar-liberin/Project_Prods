
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "1",
              campaignName: "projectLiberin",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      
   const text_f030d4ef_5fdbf030d_font = await loadFont("https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/font/Comfortaa_Regular.json");

   const text_f030d4ef_5fdbf030d_textGeo = new THREE.TextGeometry("Production Test", {
        font: text_f030d4ef_5fdbf030d_font,
        size: 0.32,
        height: 0,
    });

    const text_f030d4ef_5fdbf030d_textMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color("#e10b25") });
    
    const text_f030d4ef_5fdbf030d = new THREE.Mesh(text_f030d4ef_5fdbf030d_textGeo, text_f030d4ef_5fdbf030d_textMaterial);

    text_f030d4ef_5fdbf030d.position.set(-0.903, 0.506, 0.1);
    text_f030d4ef_5fdbf030d.scale.set(0.5, 0.5, 0.5);
    text_f030d4ef_5fdbf030d.rotation.set(-0.001, 0, 0);
    
    


const logo_279e50b2_c7ae279e5_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_279e50b2_c7ae279e5_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_279e50b2_c7ae279e5_image = new THREE.MeshBasicMaterial({
      map: logo_279e50b2_c7ae279e5_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_279e50b2_c7ae279e5 = new THREE.Mesh(logo_279e50b2_c7ae279e5_iconGeometry, logo_279e50b2_c7ae279e5_image);
    logo_279e50b2_c7ae279e5.scale.set(0.4, 0.4, 1);
    logo_279e50b2_c7ae279e5.position.set(-0.018, -0.719, 0.04);
    logo_279e50b2_c7ae279e5.rotation.set(-0.001, 0, 0);
    logo_279e50b2_c7ae279e5.userData.clickable = true
    
    logo_279e50b2_c7ae279e5.userData.eventName ="whatsapp_click"
const logo_2b96d11d_79bc2b96d_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_2b96d11d_79bc2b96d_texture = await loadTexture("assets/circle-fb-sm_107.svg");
  const logo_2b96d11d_79bc2b96d_image = new THREE.MeshBasicMaterial({
      map: logo_2b96d11d_79bc2b96d_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_2b96d11d_79bc2b96d = new THREE.Mesh(logo_2b96d11d_79bc2b96d_iconGeometry, logo_2b96d11d_79bc2b96d_image);
    logo_2b96d11d_79bc2b96d.scale.set(0.4, 0.4, 1);
    logo_2b96d11d_79bc2b96d.position.set(0.972, 0.026, 0.04);
    logo_2b96d11d_79bc2b96d.rotation.set(-0.001, 0, 0);
    logo_2b96d11d_79bc2b96d.userData.clickable = true
    
    logo_2b96d11d_79bc2b96d.userData.eventName ="facebook"
const square_ins_sm_8cd82c473_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const square_ins_sm_8cd82c473_texture = await loadTexture("assets/square-ins-sm_108.svg");
  const square_ins_sm_8cd82c473_image = new THREE.MeshBasicMaterial({
      map: square_ins_sm_8cd82c473_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const square_ins_sm_8cd82c473 = new THREE.Mesh(square_ins_sm_8cd82c473_iconGeometry, square_ins_sm_8cd82c473_image);
    square_ins_sm_8cd82c473.scale.set(0.4, 0.4, 1);
    square_ins_sm_8cd82c473.position.set(-1.005, -0.003, -0.003);
    square_ins_sm_8cd82c473.rotation.set(-0.001, 0, 0);
    square_ins_sm_8cd82c473.userData.clickable = true
    
    square_ins_sm_8cd82c473.userData.eventName ="instagram"
const target_imageundefibe35a_iconGeometry = new THREE.PlaneGeometry(1, 0.614760147601476);
   const target_imageundefibe35a_texture = await loadTexture("assets/Screenshot 2024-05-20 114351.png");
  const target_imageundefibe35a_image = new THREE.MeshBasicMaterial({
      map: target_imageundefibe35a_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageundefibe35a = new THREE.Mesh(target_imageundefibe35a_iconGeometry, target_imageundefibe35a_image);
    target_imageundefibe35a.scale.set(1, 1, 1);
    target_imageundefibe35a.position.set(0.01, -0.01, 0.01);
    target_imageundefibe35a.rotation.set(-0.001, 0, 0);
    
    
    
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_279e50b2_c7ae279e5) {
        setTimeout(()=>{
          window.location.href = "https://wa.me/9661123412?text=hello world"
        },100)
        }
      

      if (o.userData.clickable && o === logo_2b96d11d_79bc2b96d) {
        setTimeout(()=>{
          window.location.href = "https://facebook.com"
        },100)
        }
      

      if (o.userData.clickable && o === square_ins_sm_8cd82c473) {
        setTimeout(()=>{
          window.location.href = "https://instagram.com/test"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(text_f030d4ef_5fdbf030d)
anchor.group.add(logo_279e50b2_c7ae279e5)
anchor.group.add(logo_2b96d11d_79bc2b96d)
anchor.group.add(square_ins_sm_8cd82c473)



    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      
    };


    anchor.onTargetLost = () => {
      

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    