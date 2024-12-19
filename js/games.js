// استدعاء المديول الثانية 
import { Details } from "./details.js";
import { Ui } from "./UI.js";

export class Games {
   constructor() {
      // جلب الملف من ui هنا
      this.NewUi = new Ui();
      this.getGames("mmorpg");
      document.querySelectorAll(".menu a").forEach(link =>
         link.addEventListener("click", e => {
            document.querySelector(".menu .active")?.classList.remove("active");
            e.target.classList.add("active");
            this.getGames(e.target.dataset.category);
         })
      );
   }

   async getGames(Category) {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");

      try {
         const res = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, {
            headers: { 'x-rapidapi-key': '42a4cd4183msh0fed317933a985ep1ffe7ejsn327ae413dbee', 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com' }
         });
         this.NewUi.displayGames(await res.json());
         this.setupGameDetailsEvent();
      } catch (e) { console.error(e); }
      finally { loading.classList.add("d-none"); }
   }

   setupGameDetailsEvent() {
      document.querySelectorAll(".card").forEach(item =>
         item.addEventListener("click", () => { new Details(item.dataset.id); document.querySelector(".games").classList.add("d-none"); document.querySelector(".details").classList.remove("d-none"); })
      );
   }
}
