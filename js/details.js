import { Ui } from "./UI.js";

export class Details {
   constructor(id) {
      this.NewUi = new Ui();
      document.getElementById("btnClose").onclick = () => {
         document.querySelector(".games").classList.toggle("d-none");
         document.querySelector(".details").classList.toggle("d-none");
      };
      this.getDetails(id);
   }

   async getDetails(id) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      try {
         const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
            headers: { 'x-rapidapi-key': '42a4cd4183msh0fed317933a985ep1ffe7ejsn327ae413dbee', 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com' }
         });
         this.NewUi.displayGameDetails(await res.json()); 
      } catch (e) { console.error(e); }
      finally { loading.classList.add("d-none"); }
   }
}
