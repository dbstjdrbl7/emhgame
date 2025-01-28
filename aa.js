// Firebase configuration
  var firebaseConfig = {
          apiKey: "AIzaSyBBqElCYFsYZ4wqZz-O269B53MtnCoC-jw",
      authDomain: "emhgame-bbd5c.firebaseapp.com",
      databaseURL: "https://emhgame-bbd5c-default-rtdb.firebaseio.com",
      projectId: "emhgame-bbd5c",
      storageBucket: "emhgame-bbd5c.appspot.com",
      messagingSenderId: "640920535415",
      appId: "1:640920535415:web:dfac8b967f803d0e4fe172"

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
   // Reference to the database where the data is stored
  var gamesRef = database.ref('games');

  // Fetch data from Firebase
  gamesRef.once('value', function(snapshot) {
    var gamesData = snapshot.val();
    if (gamesData) {
      let accordionHtml = '';
      let index = 1;
      Object.values(gamesData).forEach(function(game) {
        accordionHtml += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button ${index === 1 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 1 ? 'true' : 'false'}" aria-controls="collapse${index}">
                ${game.name}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse ${index === 1 ? 'show' : ''}" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong><span class="fs-1 text-dak fw-bolder essential">${game.price1}</span>
							<span class="fs-3 text-body-secondary">${game.price2}</span></strong> ${game.description} <div class="mt-auto">
								<a href="${game.buttonLink}" class="btn btn-primary text-white mt-4 w-100">
${game.buttonName}</a>
							</div>
              </div>
            </div>
          </div>
        `;
        index++;
      });
      document.getElementById('accordionExample').innerHTML = accordionHtml;
    }
  });
