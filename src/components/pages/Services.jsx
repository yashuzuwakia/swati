import React from 'react'

export const Services = () => {

    /* Old way to make an XML Request
  const req = new XMLHttpRequest();

  req.onload = function (){
    console.log("Yeah Pass");
    console.log(JSON.parse(this.responseText).name);
  }

  req.onerror = (res) =>{
    console.log("Failed Error");
    console.log(res)
  }

  req.open("Get","https://swapi.dev/api/people/1/");

  req.send();

  */

  //New way of making a XML Reques Fetch !!!!!

  /*
  fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      console.log("Loaded!!!", res);
      return res.json();
    })
    .then((data) => {
      console.log("JSON Done!", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
    */

    //If we want to make one req just after another

    /*
    fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      console.log("Loaded!!!", res);
      return res.json();
    })
    .then((data) => {
      console.log("JSON Done!", data);
      return fetch("https://swapi.dev/api/people/2/")
    })
    .then((res) => {
      console.log("Second Req");
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error", err);
    });

    */

    //Let's make it more clear with Async Await

    const loadStarWarsPeople = async () => {
      try {
        const res = await fetch("https://swapi.dev/api/people/1/");
        const data = await res.json();
        console.log(data);
  
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
      } catch (error) {
        console.log(error)
      }
    }

    loadStarWarsPeople();

  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ut modi suscipit, voluptas praesentium architecto odit quasi, exercitationem repellendus ea similique incidunt. 
        Exercitationem voluptate, adipisci inventore ullam optio rerum minus neque earum similique quas iste. 
        Voluptate cum eaque excepturi veritatis necessitatibus eveniet iure fugit omnis. 
        Incidunt neque reiciendis quisquam nulla error quidem, dolore nostrum earum dolorem excepturi rem tempore eos repellat, 
        consectetur ratione quos atque sunt ad qui corrupti sed? Rem nesciunt totam impedit, aliquam autem iste perspiciatis, 
        maxime quaerat mollitia quis, asperiores quidem. Deserunt dignissimos facilis vitae possimus! 
        Nisi ut quidem reprehenderit quisquam dolores aliquid hic laboriosam, sunt architecto cum!
      </div>
      <br/>
    </div>
  )
}

