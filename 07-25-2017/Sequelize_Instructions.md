* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

    Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?

    A lot less SQL code

  	- Answer: How do I install it? How do I incorporate it into my app?

      const Sequelize = require('sequelize');
      const sequelize = new Sequelize('database', 'username', 'password');

      const User = sequelize.define('user', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
      });

      sequelize.sync()
        .then(() => User.create({
          username: 'janedoe',
          birthday: new Date(1980, 6, 20)
        }))
        .then(jane => {
          console.log(jane.get({
            plain: true
          }));
        });

  	- Answer: What the heck is a Sequelize model? What role will it play?
      It will be used to connect with the SQL database. The model is a javascript representation of the table. Creates the connection between our javascript and database.

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

      const Countries = sequelize.define('Countries', {
      Country:  {
        type: Sequelize.STRING
      },
      PhoneCode: {
        type: Sequelize.INTEGER
      },
      Capital: {
        type: Sequalize.STRING
      },
      Year: {
        type: Sequelize.INTEGER
      }
      })

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

      Countries.findAll({
      where : {
        IndependenceYear: { $gt : new Date().getFullYear() - 50}
      }
      });

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

      Countries.findAll({
        offset: 2,
        limit: 2,
        order: [[sequelize.col("IndependenceYear"), "Desc"]]
      })

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
