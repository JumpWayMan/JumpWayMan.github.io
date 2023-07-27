window.onload = () => {
	console.log("------------------------30");
    let testEntityAdded = false;		
    const el = document.querySelector("[gps-new-camera]");
	console.log("gps-new-camera =", el);
		setTimeout(function () {
			console.log("testEntityAdded =", testEntityAdded);
      }, 1000);

    el.addEventListener("gps-new-camera-update-position", e => {
			console.log("------------------------2");
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'red' } );
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;
    });
};