export class Ui {
   // دالة لعرض قائمة الألعاب
   displayGames(data) {
      let gamesHTML = '';

      if (data && Array.isArray(data)) {
         data.forEach(game => {
            const shortDescription = game.short_description.split(" ").slice(0, 8).join(" ");

            gamesHTML += `
               <div class="col">
                  <div data-id="${game.id}" class="card h-100 bg-transparent" role="button">
                     <div class="card-body">
                        <figure class="position-relative">
                           <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail || 'default-thumbnail.jpg'}" alt="${game.title}" />
                        </figure>
                        <figcaption>
                           <div class="hstack justify-content-between">
                              <h3 class="h6 small">${game.title}</h3>
                              <span class="badge text-bg-primary p-2">Free</span>
                           </div>
                           <p class="card-text text-white small text-center opacity-50">
                              ${shortDescription}
                           </p>
                        </figcaption>
                     </div>
                     <footer class="card-footer small hstack justify-content-between">
                        <span class="badge text-white badge-color">${game.genre}</span>
                        <span class="badge text-white badge-color">${game.platform}</span>
                     </footer>
                  </div>
               </div>
            `;
         });

         document.getElementById("gameData").innerHTML = gamesHTML;
      } else {
         console.error('Invalid game data');
      }
   }

   displayGameDetails(game) {
      if (!game) {
         console.error('No game details available');
         return;
      }

      const content = `
         <div class="row">
            <div class="col-md-4">
               <img src="${game.thumbnail || 'default-thumbnail.jpg'}" class="w-100" alt="image details" />
            </div>
            <div class="col-md-8">
               <h3>${game.title}</h3>
               <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
               <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
               <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
               <p class="small">${game.description}</p>
               <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
            </div>
         </div>
      `;

      document.getElementById("detailsContent").innerHTML = content;
   }
}
