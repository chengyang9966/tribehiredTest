# tribehiredTest

## Installation


```bash
git clone https://github.com/chengyang9966/tribehiredTest.git

cd to tribehiredTest
-if you are using yarn 
yarn install 

yarn start 

-if you are using npm package manager
 
npm install

npm run start
```

## API 
It will host on port 8000

**http://localhost:8000/topcomments**
 * this api will return all top post based on numbers of comments on the post 
 * default will return 10 records
 * offset=50 means, skip the first 50 records
 * limit=25 means, return a maximum of 25 records
    
it will return data in a JSON Format 

    {
    "data": [
        {
            "post_id": 1,
            "total_number_of_comments": 5,
            "post_title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "post_body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 2,
            "total_number_of_comments": 5,
            "post_title": "qui est esse",
            "post_body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 3,
            "total_number_of_comments": 5,
            "post_title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "post_body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 4,
            "total_number_of_comments": 5,
            "post_title": "eum et est occaecati",
            "post_body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 5,
            "total_number_of_comments": 5,
            "post_title": "nesciunt quas odio",
            "post_body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 6,
            "total_number_of_comments": 5,
            "post_title": "dolorem eum magni eos aperiam quia",
            "post_body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 7,
            "total_number_of_comments": 5,
            "post_title": "magnam facilis autem",
            "post_body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 8,
            "total_number_of_comments": 5,
            "post_title": "dolorem dolore est ipsam",
            "post_body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 9,
            "total_number_of_comments": 5,
            "post_title": "nesciunt iure omnis dolorem tempora et accusantium",
            "post_body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        },
        {
            "post_id": 10,
            "total_number_of_comments": 5,
            "post_title": "optio molestias id quia eum",
            "post_body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
            "post_user_id": 1,
            "post_user_name": "Leanne Graham",
            "post_user_email": "Sincere@april.biz",
            "post_user_username": "Bret"
        }
    ]
    }


**http://localhost:8000/comments**
 * this api will return comments based on the search query
 * default will return 10 records
 * q is required, q=25 means, return all records that includes 25
 * limit=25 means, return a maximum of 25 records
 * pagination=true means, will show pagination 
 * if pagination is true we can set pageNumber=1 return data on page number 1 
          
       {
        "data": [
        {
            "postId": 3,
            "id": 12,
            "name": "modi ut eos dolores illum nam dolor",
            "email": "Oswald.Vandervort@leanne.org",
            "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
        },
        {
            "postId": 12,
            "id": 56,
            "name": "et dolorem corrupti sed molestias",
            "email": "Vince_Crist@heidi.biz",
            "body": "cum esse odio nihil reiciendis illum quaerat\nest facere quia\noccaecati sit totam fugiat in beatae\nut occaecati unde vitae nihil quidem consequatur"
        },
        {
            "postId": 12,
            "id": 57,
            "name": "qui quidem sed",
            "email": "Darron.Nikolaus@eulah.me",
            "body": "dolorem facere itaque fuga odit autem\nperferendis quisquam quis corrupti eius dicta\nrepudiandae error esse itaque aut\ncorrupti sint consequatur aliquid"
        },
        {
            "postId": 12,
            "id": 58,
            "name": "sint minus reiciendis qui perspiciatis id",
            "email": "Ezra_Abshire@lyda.us",
            "body": "veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate"
        },
        {
            "postId": 12,
            "id": 59,
            "name": "quis ducimus distinctio similique et illum minima ab libero",
            "email": "Jameson@tony.info",
            "body": "cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia"
        },
        {
            "postId": 12,
            "id": 60,
            "name": "expedita libero quos cum commodi ad",
            "email": "Americo@estrella.net",
            "body": "error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae"
        },
        {
            "postId": 23,
            "id": 112,
            "name": "dolore aut aspernatur est voluptate quia ipsam",
            "email": "Aniyah.Ortiz@monte.me",
            "body": "ut tempora deleniti quo molestiae eveniet provident earum occaecati\nest nesciunt ut pariatur ipsa voluptas voluptatem aperiam\nqui deleniti quibusdam voluptas molestiae facilis id iusto similique\ntempora aut qui"
        },
        {
            "postId": 24,
            "id": 120,
            "name": "harum error sit",
            "email": "Joshua.Spinka@toby.io",
            "body": "iusto sint recusandae placeat atque perferendis sit corporis molestiae\nrem dolor eius id delectus et qui\nsed dolorem reiciendis error ullam corporis delectus\nexplicabo mollitia odit laborum sed itaque deserunt rem dolorem"
        },
        {
            "postId": 25,
            "id": 121,
            "name": "deleniti quo corporis ullam magni praesentium molestiae",
            "email": "Annabelle@cole.com",
            "body": "soluta mollitia impedit cumque nostrum tempore aut placeat repellat\nenim adipisci dolores aut ut ratione laboriosam necessitatibus vel\net blanditiis est iste sapiente qui atque repellendus alias\nearum consequuntur quia quasi quia"
        },
        {
            "postId": 25,
            "id": 122,
            "name": "nihil tempora et reiciendis modi veniam",
            "email": "Kacey@jamal.info",
            "body": "doloribus veritatis a et quis corrupti incidunt est\nharum maiores impedit et beatae qui velit et aut\nporro sed dignissimos deserunt deleniti\net eveniet voluptas ipsa pariatur rem ducimus"
        },
        {
            "postId": 25,
            "id": 123,
            "name": "ad eos explicabo odio velit",
            "email": "Mina@mallie.name",
            "body": "nostrum perspiciatis doloribus\nexplicabo soluta id libero illo iste et\nab expedita error aliquam eum sint ipsum\nmodi possimus et"
        },
        {
            "postId": 25,
            "id": 124,
            "name": "nostrum suscipit aut consequatur magnam sunt fuga nihil",
            "email": "Hudson.Blick@ruben.biz",
            "body": "ut ut eius qui explicabo quis\niste autem nulla beatae tenetur enim\nassumenda explicabo consequatur harum exercitationem\nvelit itaque consectetur et possimus"
        }
       ],
       "page": 1,
       "per_page": 12,
       "pre_page": null,
       "next_page": 2,
       "total": 20,
       "total_pages": 2
        }
