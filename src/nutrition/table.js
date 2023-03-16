import React from "react";

function Table() {
    let newArr = [
      {
          dessert: 'Frozen yoghurt',
          calories: 159,
          fat: 6,
          carbs:24,
          protein: 4,
          id:1
      },
      {
          dessert: 'Ice cream sandwich',
          calories: 237,
          fat: 9,
          carbs:37,
          protein: 4.3,
          id:2
      },
      {
          dessert: 'Eclair',
          calories: 262,
          fat: 16,
          carbs:24,
          protein: 6,
          id:3
      },
      {
          dessert: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs:67,
          protein: 4.3,
          id:4
      },
      {
          dessert: 'Book',
          calories: 318,
          fat: 12,
          carbs:81,
          protein: 2,
          id:5
      },
      {
          dessert: 'Pencil',
          calories: 318,
          fat: 1,
          carbs:81,
          protein: 2,
          id:6
      },
      {
          dessert: 'Pen',
          calories: 318,
          fat: 2,
          carbs:81,
          protein: 2,
          id:7
      },
      {
          dessert: 'Notebook',
          calories: 318,
          fat: 3,
          carbs:81,
          protein: 2,
          id:8
      },
      {
          dessert: 'Article',
          calories: 318,
          fat: 4,
          carbs:81,
          protein: 2,
          id:9
      },
      {
          dessert: 'Newspaper',
          calories: 318,
          fat: 5,
          carbs:81,
          protein: 2,
          id:10
      },
      {
          dessert: 'Laptok',
          calories: 318,
          fat: 6,
          carbs:81,
          protein: 2,
          id:11
      },
      {
          dessert: 'Mouse',
          calories: 318,
          fat: 7,
          carbs:81,
          protein: 2,
          id:12
      },
      {
          dessert: 'Press',
          calories: 318,
          fat: 8,
          carbs:81,
          protein: 2,
          id:13
      }
    ];
    let tr = document.querySelectorAll('tbody tr');
    let topArr = Array.from(tr);
    let nutrition = document.querySelector('.nutrition');
    
    let span = document.getElementById('span');
    function add(e) {
    
      if(!e.target.classList.contains('checked')){
        e.target.classList.add('checked');
        nutrition.classList.add('active')
        
        topArr.forEach(item=>{
          item.classList.add('check')
        })
        let news = topArr.filter(item=> item.classList.contains('check'));
        span.innerHTML = news.length
      }else{
        e.target.classList.remove('checked');
        nutrition.classList.remove('active')
        topArr.forEach(item=>{
          item.classList.remove('check')
        })
      }
    }
    
    function check(e) {
      
      
      if(!e.target.parentNode.classList.contains('check')){
         e.target.parentNode.classList.add('check') 
         nutrition.classList.add('active') 
         let news = topArr.filter(item=> item.classList.contains('check'));
        span.innerHTML = news.length;
      }else {
        e.target.parentNode.classList.remove('check');
        let news = topArr.filter(item=> item.classList.contains('check'));
        span.innerHTML = news.length;
        if(news.length === 0) {
          nutrition.classList.remove('active')
        }
      }
    }

    return(
        <table className="table">
            <thead>
              <tr>
                <th className="start " onClick={add} id="check">
                  <span className="material-symbols-outlined">check_box_outline_blank</span>
                  <span className="material-symbols-outlined">indeterminate_check_box</span>
                   Dessert(100g serving)
                   <span id="icon" className="material-symbols-outlined ">arrow_upward</span>
                  </th>
                <th className="calors"><span className="material-symbols-outlined ">arrow_upward</span> Calories</th>
                <th className="icon"> <span className="material-symbols-outlined ">arrow_upward</span> Fat(g)</th>
                <th>Carbs(g)</th>
                <th>Protein(g)</th>
              </tr>
            </thead>
            <tbody>
              {newArr.map(item=>(
                <tr >
                  <td class="start type" onClick={check} >
                  <span class="material-symbols-outlined">check_box</span>
                  <span class="material-symbols-outlined">check_box_outline_blank</span>{item.dessert}
                  </td>
                  <td>{item.calories}</td>
                  <td>{item.fat}</td>
                  <td>{item.carbs}</td>
                  <td>{item.protein}</td>
                </tr>
              ))}
            </tbody>
        </table>
    )
}

export default Table;