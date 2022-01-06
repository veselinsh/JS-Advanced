// class ArtGallery{
//    constructor(creator){
//        this.creator = creator;
//        this.possibleArticles = {
//            picture: 200,
//            photo : 50,
//            item: 250,
//        }
//        this.listOfArticles = [];
//        this.guests = [];
//    }
//    addArticle(articleModel, articleName, quantity){
//       const find = Object.keys(this.possibleArticles).find(f => f == articleModel.toLowerCase())
//       if(find !== undefined){
//         if(this.listOfArticles[articleName] == articleModel && this.listOfArticles[articleModel] == articleModel){
//             this.listOfArticles[quantity] += quantity;
//         }else{
//             articleModel = articleModel.toLowerCase();
//             this.listOfArticles.push({articleModel, articleName, quantity});
//         }
        
//       }else{
//         throw new Error('This article model is not included in this gallery!');
//       }
//       return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
//    }
//    inviteGuest(guestName, personality){
//        const match = this.guests.find(s => s.guestName == guestName);
//      if(match !== undefined){
//          throw new Error(`${guestName} has already been invited.`)
//      }else{
//          let points = 0;
//          if(personality == 'Vip'){
//              points = 500;
//          }else if(personality == 'Middle'){
//             points = 250;
//          }else{
//              points = 50;
//          }
//          this.guests.push({guestName, points, purchaseArticle: 0})
//      }
//      return `You have successfully invited ${guestName}!`;
//    }
//    buyArticle(articleModel, articleName, guestName){
//     const matchModel = this.listOfArticles.find(s => s.articleModel == articleModel.toLowerCase());
//     const matchName = this.listOfArticles.find(s => s.articleName == articleName);
//     const guestList = this.guests.find(s => s.guestName == guestName);
//     if(matchModel === undefined || matchName === undefined){
//         throw new Error('This article is not found.');
//     }
//     if(matchModel.quantity === 0){
//         return `The ${articleName} is not available.`;
//     }
//     if(guestList === undefined){
//         return `This guest is not invited.`;
//     }
//     if(this.possibleArticles[articleModel] <= guestList.points){
//         guestList.points -= this.possibleArticles[articleModel];
//         guestList.purchaseArticle += 1;
//         this.listOfArticles.quantity -= 1;
//         return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
//     }else{
//         return `You need to more points to purchase the article.`;
//     }
//    }
//    showGalleryInfo (criteria){
//       if(criteria === 'article'){
//           console.log("Articles information:");
//          for(let value of Object.values(this.listOfArticles)){
//           console.log(Object.values(value))
//          }
//       }else{
//           console.log("Guests information:");
//         // for(let value of Object.values(this.guests)){
           
//         //   }
//       }
//    }
// }
// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// // artGallery.buyArticle('picture', 'Mona Liza', 'John');
// // artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

