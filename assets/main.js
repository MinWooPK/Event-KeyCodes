window.addEventListener("keydown", (e) => {
    document.getElementById(
        "insert"
    ).innerHTML = `
    
    <div class=eventKeyContainer >
    
  
             <div class=eventContainer>
                  <div>event.key</div>
                 <div class=container>${e.key}</div>
            </div>


             <div class=eventContainer> 
                   <div> event.keyCode </div>
                  <div class=container> ${e.keyCode}</div>
              </div>




             <div class=eventContainer> 
                  <div> event.code </div>
                  <div class=container> ${e.code}</div>
              </div>

    </div>
    `;
});