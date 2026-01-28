-- Seed initial menus
insert into public.menus (
  slug,
  title,
  menu_type,
  location,
  subtitle,
  categories,
  allergen_notice,
  is_published
)
values
  (
    'northside',
    'Northside Menu',
    'Lunch + Dinner',
    'northside',
    'From wings to burgers and pizzas, this menu keeps the classics tight.',
    $$[
      {
        "title": "Starters + Specials",
        "description": "Starters, weekly specials, and lunch specials.",
        "items": [
          {
            "name": "Dirty-Style Wings",
            "price": "18",
            "details": "Bone-in and deep-fried, then grilled to perfection with our signature blend of buffalo sauce and Cajun dry rub. Takes a bit longer, but worth the wait."
          },
          {
            "name": "Wet and Dirty Wings*",
            "price": "18",
            "details": "The best damn wings you’ve ever had! Bone-in and deep-fried, then tossed in a secret blend of spicy sauce and Cajun spices. Grilled to perfection, tossed in the sauce again and topped with sesame seeds! Just the right amount of sweet and spicy.",
            "notes": "Served with sesame seeds."
          },
          {
            "name": "Traditional or Boneless Wings",
            "price": "17",
            "details": "Traditional bone-in and deep-fried, or boneless hand-breaded and crispy. Served with celery, one sauce and choice of ranch or blue cheese.",
            "notes": "Sauce served on the side or tossed: Buffalo, Spicy Bourbon, Hot Garlic, Hoosier Hot, BBQ."
          },
          {
            "name": "TDT Chicken Nachos",
            "price": "Full 15 | Snack 11",
            "details": "White queso, red onion, jalapeño, cheddar cheese, tomato, green onion and cilantro with sriracha aioli."
          },
          {
            "name": "Texas Guac",
            "price": "14",
            "details": "House-made guacamole topped with diced and deep-fried pork belly and slow-cooked prime rib. Served with a side of chips and salsa."
          },
          {
            "name": "Tap Pretzel",
            "price": "13",
            "details": "Salted pub-style Bavarian pretzel served with Scotch ale beer cheese and white queso."
          },
          {
            "name": "Fried Cheese",
            "price": "13",
            "details": "Six house breaded and fried mozzarella triangles served with spicy marinara sauce.",
            "notes": "Share a picture of your cheese pull on Facebook or Instagram for a chance to win a $25 TDT gift card."
          },
          {
            "name": "Oven-Roasted Buffalo Cauliflower",
            "price": "12",
            "details": "Oven-roasted and served over a bed of greens with a side of buffalo sauce, chipotle ranch and a lemon wedge."
          },
          {
            "name": "Seared Ahi Tuna*",
            "price": "16",
            "details": "Sashimi grade blackened tuna served on a bed of Asian spring mix. Ponzu and soy sauce for dipping."
          },
          {
            "name": "Hummus Platter",
            "price": "13",
            "details": "Roasted red pepper hummus and spicy feta dip with cucumbers, grape tomatoes, Kalamata olives and pita chips. Feta cheese for garnish."
          },
          {
            "name": "Chori-Queso Potato Dippers",
            "price": "13",
            "details": "White queso with chorizo and shredded pepper jack cheese topped with house-made pico. Served with fried Cajun potato wedges."
          },
          {
            "name": "Firecracker Shrimp*",
            "price": "15",
            "details": "Hand-breaded and tossed in our house-made firecracker sauce served on a bed of Asian slaw. Topped with green onion and sesame seeds."
          },
          {
            "name": "Southwest Egg Rolls",
            "price": "14",
            "details": "Chicken, pepper jack cheese, black beans, spinach, corn and cilantro, all on top of a bed of guacamole. Served with sriracha aioli."
          },
          {
            "name": "Pickle Nugs",
            "price": "12",
            "details": "Hand-breaded and fried crispy. Served with creamy horseradish peppercorn sauce and ranch."
          },
          {
            "name": "Birria Pork Nachos",
            "price": "Full 15 | Snack 11",
            "details": "White queso, cheddar cheese, black bean and corn salsa, tomato, red onion and cilantro with avocado salsa."
          },
          {
            "name": "Potstickers",
            "price": "13",
            "details": "Pan-seared dumplings filled with pork and vegetables, drizzled with soy glaze. Served with a side of soy sauce for dipping."
          },
          { "name": "The District Burger*" },
          { "name": "District Club" },
          { "name": "Mini Mac Pot", "details": "Choice of one mac n’ cheese pot." },
          { "name": "Signature Lunch Salad with Cup of Soup" },
          { "name": "Hoosier Daddy Breaded Tenderloin" },
          { "name": "Chicken Tacos (3)", "details": "Served with a breadstick and a side salad." },
          { "name": "Indy’s Cheesesteak" },
          { "name": "Monday", "details": "$2 off burgers, 22oz domestics 5, Jim Beam 5." },
          { "name": "Tuesday", "details": "Tacos 12, Corona/Corona Premiere bottles 4, Margaritas 8." },
          { "name": "Wednesday", "details": "Gen. JC’s Chicken 14, half-off select bottles of wine, High Noon 5, Jaeger Bomb 6." },
          { "name": "Thursday", "details": "Most pints 5, Jack Daniels and flavors 6, Vegas Bombs 6, Buffalo Trace 6." },
          { "name": "Friday", "details": "Cran’s Trout Almondine 18, Jameson & Green Tea shots 5, Modelo pints 5, Hiatus Silver 6, Fireball 5." },
          { "name": "Saturday", "details": "Rhinegeist pints 5, Modelo 22oz 6, Bloody Mary 6, Mimosas 5." },
          { "name": "Sunday", "details": "$2 off Wet ‘n Dirty & Dirty Style Wings, Sun King pints 5, Bloody Mary 6, Mimosas 5." }
        ]
      },
      {
        "title": "Soups + Salads",
        "description": "Soups, dressings, and salad add-ons.",
        "items": [
          {
            "name": "Dressings",
            "tags": [
              "Asian Ginger",
              "House-Made Ranch",
              "Chunky Blue Cheese",
              "Balsamic Vinaigrette",
              "Caesar",
              "Honey Mustard",
              "French",
              "Italian",
              "Chipotle Ranch",
              "Raspberry Walnut Vinaigrette"
            ]
          },
          { "name": "District Cobb" },
          {
            "name": "KB’s Super Food",
            "price": "13",
            "details": "Baby spinach, blueberries, craisins, edamame, romaine blend, roasted turkey, bacon, blue cheese crumbles, hardboiled egg, tomato and avocado. Tossed with raspberry vinaigrette.",
            "notes": "Add blackened salmon for KB’s style +8."
          },
          {
            "name": "BBQ Chicken Chop",
            "price": "15",
            "details": "Romaine blend, tomatoes, cucumbers, celery, cheddar and pepper jack cheeses. Tossed with chipotle ranch and topped with Cajun chicken and crispy tortilla strips. BBQ chicken and crispy onion straws."
          },
          {
            "name": "Baja Chicken",
            "price": "15",
            "details": "Romaine blend, black bean and corn salsa, jicama, shredded carrots, red onion, avocado, sunflower seeds, pepper jack cheese, tomato and cucumber. Tossed with house-made ranch."
          },
          {
            "name": "Fried Buffalo Chicken",
            "price": "15",
            "details": "Romaine blend, tomatoes, cucumbers, celery, cheddar cheese and red onion. Topped with fried buffalo chicken tenders. Served with a side of ranch."
          },
          {
            "name": "Caesar",
            "price": "11",
            "details": "Romaine lettuce tossed with creamy Caesar dressing, topped with shredded Parmesan, croutons and grape tomatoes."
          },
          {
            "name": "Steak ‘N Blue",
            "price": "17",
            "details": "Field greens, red onion, grape tomatoes and blue cheese crumbles. Served with balsamic vinaigrette and topped with filet grilled just the way you like it."
          },
          {
            "name": "Apple Walnut",
            "price": "13",
            "details": "Field greens, red apple, red grapes, blue cheese and candied walnuts. Served with a side of balsamic vinaigrette."
          },
          {
            "name": "Wedge",
            "price": "11",
            "details": "Iceberg wedge, bacon bits, blue cheese crumbles and grape tomatoes. Drizzled with house-made ranch."
          },
          {
            "name": "Cactus Chili",
            "details": "A Southwestern style chili with ground beef, great northern beans, corn and cactus. Served with cheddar cheese and red onions. A fan favorite!"
          },
          {
            "name": "French Onion",
            "details": "Our signature homemade soup made with Indiana’s own Quaff-On! Busted Knuckle porter, red wine, simmered yellow onions and topped with a crouton and gruyere cheese."
          },
          { "name": "Soup of the Day" }
        ]
      },
      {
        "title": "Handhelds",
        "description": "Burgers, sandwiches, wraps, and tacos.",
        "items": [
          {
            "name": "The Smash",
            "price": "15",
            "details": "Two smashed beef patties, melted cheddar cheese, fried red onion, boom boom sauce, lettuce, tomato, pickle, and mayo."
          },
          {
            "name": "Bottle Cap",
            "price": "15.50",
            "details": "Cajun seasoned patty, pepper jack cream cheese, fried jalapeños, chipotle mayo, lettuce, tomato, and onion."
          },
          {
            "name": "The District Burger",
            "price": "14.50",
            "details": "Lettuce, tomato, onion, pickle, and American cheese."
          },
          {
            "name": "Bulleit Burger",
            "price": "16.50",
            "details": "Melted provolone cheese, shaved prime rib, cherrywood smoked bacon, Bulleit Bourbon BBQ sauce, crispy onion straws, and pickle."
          },
          {
            "name": "Impossible",
            "price": "15",
            "details": "Impossible to tell it’s not meat! Provolone cheese, chipotle mayo, lettuce, tomato, onion, and pickle."
          },
          {
            "name": "Beef on Weck",
            "price": "16",
            "details": "Thin-sliced prime rib served warm topped with horseradish on a kummelweck roll. Served with au jus and a pickle."
          },
          {
            "name": "Buffalo Chicken Sandwich",
            "price": "15.50",
            "details": "Fried chicken tossed in buffalo topped with lettuce, tomato, pickle, chipotle mayo, and pepper jack cheese. Served on a brioche bun."
          },
          {
            "name": "District Club",
            "price": "15",
            "details": "Ham, turkey, cherrywood smoked bacon, cheddar, Swiss, avocado, lettuce, tomato, and mayo on a toasted hoagie. Try it as a wrap!"
          },
          {
            "name": "Steak Burrito",
            "price": "16",
            "details": "Blackened hand-trimmed steak with bell peppers, onions, mushrooms, pinto beans, Mexican rice, cilantro, queso, zesty avocado salsa, and a drizzle of chipotle ranch. Wrapped in a flour tortilla."
          },
          {
            "name": "Filet Sliders",
            "price": "17",
            "details": "Two filet sliders, creamy horseradish peppercorn sauce, and fried onion straws."
          },
          {
            "name": "Hoosier Daddy Breaded Tenderloin",
            "price": "15",
            "details": "A hand-breaded crispy tenderloin with lettuce, tomato, onion, pickle, and mayo on a brioche bun. Served with extra mayo in true Indiana fashion."
          },
          {
            "name": "Shrimp Po’ Boy",
            "price": "16",
            "details": "Hand-breaded shrimp, pepper jack, boom boom sauce, shredded lettuce, tomato, and red onion on a hoagie bun. Try it as a wrap!"
          },
          {
            "name": "Left Coast Chicken Club",
            "price": "16",
            "details": "Grilled chicken topped with cherrywood smoked bacon, avocado, melted Swiss, lettuce, tomato, onion, and roasted garlic mayo on a toasted brioche bun."
          },
          {
            "name": "Indy’s Cheesesteak",
            "price": "16",
            "details": "Hand-trimmed steak topped with bell pepper, onions, jalapeños, mushrooms, mayo, and provolone cheese. Served on a hoagie bun."
          },
          {
            "name": "Buffalo Chicken Wrap",
            "price": "15.50",
            "details": "Crispy buffalo chicken tenders, cheddar, shredded lettuce, celery, and a drizzle of house-made ranch wrapped in a flour tortilla. Served with a side of ranch."
          },
          {
            "name": "Chicken Caesar Wrap",
            "price": "15.50",
            "details": "Flour tortilla, romaine lettuce, Parmesan, Caesar dressing, and a grilled chicken breast."
          },
          {
            "name": "TDT Gyro",
            "price": "15",
            "details": "Marinated chicken shawarma wrapped in pita bread with house-made traditional tzatziki sauce, cucumber, Roma tomatoes, red onion, and drizzled with our signature zesty tzatziki sauce. Served with choice of side."
          },
          {
            "name": "Chipotle Chicken Quesadilla",
            "price": "16",
            "details": "Flour tortilla, cheddar cheese, pepper jack cheese, chipotle chicken, tomatoes, onions, street corn topped with chopped cilantro, served with bed of lettuce, pico de gallo, sour cream, guacamole, and Mexican rice."
          },
          {
            "name": "Birria",
            "price": "15",
            "details": "Slow cooked birria pork and Chihuahua cheese on crunchy corn tortillas garnished with pickled onions and cilantro. Served with broth for dipping."
          },
          {
            "name": "Grilled Mahi Mahi",
            "price": "15",
            "details": "Blackened mahi mahi, citrus slaw, zesty avocado salsa, and mango salsa."
          },
          {
            "name": "Cali Shrimp",
            "price": "15",
            "details": "Shrimp cooked with salt and pepper, garlic, poblano peppers, yellow onions, diced tomatoes, chipotle mayo, and topped with salsa verde and melted mozzarella."
          },
          {
            "name": "Grilled Chicken",
            "price": "14",
            "details": "Pulled chicken, sautéed onions, lettuce, white queso, zesty avocado salsa, tomatoes, and sour cream."
          },
          {
            "name": "Steak Fajitas",
            "price": "15",
            "details": "Blackened hand-trimmed steak, melted Chihuahua cheese, sautéed tri-colored bell peppers, onion, jalapeños, and tomatoes."
          }
        ]
      },
      {
        "title": "Pizza + Entrees",
        "description": "Pizzas, hearty plates, and tenders.",
        "items": [
          {
            "name": "Pepperoni & Sausage",
            "price": "14",
            "details": "Spicy Italian sausage, pepperoni, mozzarella."
          },
          {
            "name": "Margherita",
            "price": "14",
            "details": "Garlic, olive oil, mozzarella, Parmesan, Roma tomato slices and fresh basil."
          },
          {
            "name": "Al Pastor",
            "price": "15",
            "details": "Chorizo queso, mozzarella cheese, al pastor meat (pork), pineapple, diced yellow onion, avocado salsa and cilantro."
          },
          {
            "name": "TDT Tenders",
            "price": "15.50",
            "details": "Hand-breaded and crispy. Served with fries and choice of two sauces.",
            "notes": "Sauce served on the side: Buffalo, Spicy Bourbon, Hot Garlic, Hoosier Hot, BBQ."
          },
          { "name": "District Mac", "price": "14", "details": "Parmesan cheese and white queso topped with a toasted Parmesan crust." },
          { "name": "Daddy Mac 2.0", "price": "16", "details": "Cherrywood smoked bacon, cheddar cheese, and grilled smoked pork belly. Drizzled with BBQ sauce." },
          { "name": "Chicken & Shrimp Alfredo", "price": "18", "details": "Fettuccini pasta tossed with Alfredo sauce, sautéed shrimp, Parmesan, sautéed red onions, and garlic topped with blackened chicken. Served with a breadstick." },
          { "name": "Creole Pasta", "price": "18", "details": "Penne pasta, shrimp, andouille sausage, asparagus, mushrooms, and bacon. Tossed in sun-dried tomato pesto cream sauce and topped with Parmesan cheese and red pepper flakes. Served with a breadstick." },
          { "name": "General JC’s Chicken", "price": "16", "details": "Tempura battered chicken tossed with a sweet and spicy sauce, Japanese peppers, garlic, and broccoli. Served over jasmine rice and topped with sesame seeds." },
          { "name": "Chicken Enchiladas", "price": "15.50", "details": "Four chicken stuffed tortillas tossed in a creamy enchilada sauce topped with mozzarella cheese, sour cream, avocado, and garnished. Served with Mexican rice." },
          { "name": "Pork Chop", "price": "28", "details": "Brown sugar marinated French-grilled maple bacon glazed bone-in pork chop. Served with cheddar mashed potatoes and crispy bacon Brussels sprouts." },
          { "name": "A Nice Rack of Lamb", "price": "19", "details": "Four lamb lollipops cooked medium, topped with chimichurri sauce over jasmine rice and bacon-wrapped asparagus. Extra maple bacon glaze for dipping.", "notes": "More lamb lollipops for +10." },
          { "name": "District Fish ‘N Chips", "price": "16", "details": "Atlantic salmon hand-battered and deep-fried to a golden crisp. Served with fries and Asian slaw. Dijon horseradish and tartar sauce for dipping." },
          { "name": "Cran’s Trout Almondine", "price": "24", "details": "Pan-seared trout dusted in flour, salt and pepper, topped with toasted almonds with butter and grapes, served with mashed potatoes, steamed broccoli, and lemon wedges." },
          { "name": "Grilled Salmon", "price": "20", "details": "Blackened salmon topped with lemon butter and served with mashed potatoes and veggies." },
          { "name": "French Quarter Jambalaya", "price": "18", "details": "Chicken, shrimp, andouille sausage, mussels, green pepper, yellow onion, celery, and rice. Garnished with green onions." },
          { "name": "Ribeye Steak*", "price": "29", "details": "14oz ribeye grilled to your liking and topped with lemon butter. Served with mashed potatoes and veggies." },
          { "name": "Cajun Butter Ribeye Steak*", "price": "31", "details": "14oz Cajun seasoned ribeye grilled the way you like it. Topped with Cajun butter and served with mashed potatoes and veggies." },
          { "name": "Center Cut Sirloin*", "price": "22", "details": "8oz sirloin topped with melted lemon butter and served with mashed potatoes and veggies." }
        ]
      },
      {
        "title": "Sides + Kids + Desserts",
        "description": "Sides, kids meals, and desserts.",
        "items": [
          { "name": "Seasoned Fries", "price": "5" },
          { "name": "Sweet Potato Fries", "price": "5" },
          { "name": "Steamed Broccoli", "price": "5" },
          { "name": "White Cheddar Mashed Potatoes", "price": "5" },
          { "name": "Tater Tots", "price": "5" },
          { "name": "Creamy Cole Slaw", "price": "5" },
          { "name": "Mexican Rice", "price": "5" },
          { "name": "Asian Slaw", "price": "5" },
          { "name": "Cottage Cheese", "price": "5" },
          { "name": "Tap House Salad", "price": "6" },
          { "name": "Seasonal Vegetables", "price": "6" },
          { "name": "Mac & Cheese", "price": "6" },
          { "name": "Cajun Butter Corn Cob Skewers", "price": "6" },
          { "name": "Bacon-Wrapped Asparagus", "price": "7" },
          { "name": "Caesar Salad", "price": "7" },
          { "name": "Crispy Bacon Brussels Sprouts", "price": "7" },
          { "name": "Fettuccine Pasta", "price": "8", "details": "With your choice of Alfredo, marinara, or butter." },
          { "name": "Mac & Cheese", "price": "8" },
          { "name": "Chicken Tenders", "price": "8" },
          { "name": "Mini Corn Dogs", "price": "8" },
          { "name": "Mini Cheeseburgers", "price": "8" },
          { "name": "Cheese Pizza", "price": "9" },
          { "name": "Brownie Sundae", "price": "9", "details": "Ghirardelli triple chocolate brownie with vanilla ice cream, whipped cream, and caramel sauce." },
          { "name": "Cast Iron Cookie", "price": "9", "details": "Chocolate chip cookie topped with vanilla ice cream and your choice of chocolate or caramel sauce." },
          { "name": "Bread Pudding Bites", "price": "9", "details": "Deep-fried bread pudding drizzled with warm caramel sauce, topped with ice cream and sprinkled with cinnamon sugar." },
          { "name": "New York Cheesecake", "price": "9", "details": "With fresh strawberries, strawberry purée, and whipped cream." }
        ]
      }
    ]$$::jsonb,
    'Please inform your server of food allergies before ordering. Our kitchens contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Cross-contamination is possible.',
    true
  ),
  (
    'downtown',
    'Downtown Menu',
    'Lunch + Dinner',
    'downtown',
    'Signature starters, handhelds, and entrees built for game day and late night.',
    $$[
      {
        "title": "Shareables",
        "description": "Dirty-style wings, nachos, pretzels, and craveable starters.",
        "items": [
          { "name": "Dirty Wings", "details": "House wet + dry rub, ranch or blue cheese." },
          { "name": "Texas Guac", "details": "Avocado mash, roasted corn salsa, tortilla chips." },
          { "name": "District Nachos", "details": "Pulled chicken, queso, pico, jalapenos, crema." }
        ]
      },
      {
        "title": "Handhelds",
        "description": "Sandwiches, tacos, and stacked burgers.",
        "items": [
          { "name": "Tap Burger", "details": "Angus patty, white cheddar, lettuce, tomato, aioli." },
          { "name": "Nashville Hot Chicken Sandwich", "details": "Pickle brine fried chicken, slaw, heat sauce." },
          { "name": "Blackened Fish Tacos", "details": "Cabbage, cilantro crema, pico." }
        ]
      },
      {
        "title": "Entrees",
        "description": "Chef-driven plates with bold flavor.",
        "items": [
          { "name": "Smothered Chicken", "details": "House gravy, mashed potatoes, veg." },
          { "name": "Hanger Steak", "details": "Garlic butter, roasted veg, fries." },
          { "name": "Pesto Mac + Cheese", "details": "Baked, topped with parmesan." }
        ]
      }
    ]$$::jsonb,
    'Please inform your server of food allergies before ordering. Our kitchens contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Cross-contamination is possible.',
    true
  ),
  (
    'event',
    'Downtown Event Menu',
    'Event',
    'downtown',
    'Trays, shareables, and slider packs designed for private events and celebrations.',
    $$[
      {
        "title": "Large Format Shareables",
        "description": "Perfect for parties, office events, and game-day groups.",
        "items": [
          { "name": "Texas Guac Tray", "price": "$55", "details": "Serves 10-12." },
          { "name": "Wings by the Dozen", "price": "$24", "details": "Wet + dirty or dry rub." },
          { "name": "Pretzel Board", "price": "$38", "details": "House queso and mustards." }
        ]
      },
      {
        "title": "Sandwich + Salad Trays",
        "items": [
          { "name": "Slider Trio", "price": "$60", "details": "Cheeseburger, chicken, pulled pork." },
          { "name": "Wrap Platter", "price": "$58", "details": "Buffalo chicken, turkey club, veggie." },
          { "name": "District Salad", "price": "$45", "details": "Mixed greens, cheddar, tomato." }
        ]
      }
    ]$$::jsonb,
    'Please inform your server of food allergies before ordering. Our kitchens contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Cross-contamination is possible.',
    true
  ),
  (
    'brunch',
    'Northside Brunch',
    'Brunch',
    'northside',
    'Brunch shareables, hearty plates, and libations only at the Northside location.',
    $$[
      {
        "title": "Brunch Shareables",
        "items": [
          { "name": "Boujee Batter Board", "details": "Pancakes, berries, sauces, whipped butter." },
          { "name": "Yeah Toast", "details": "Texas toast, citrus ricotta, candied bacon." }
        ]
      },
      {
        "title": "Brunch Plates",
        "items": [
          { "name": "Hanger Steak + Eggs", "details": "Breakfast potatoes, chimichurri." },
          { "name": "Smothered Chicken + Biscuit", "details": "Pepper gravy." },
          { "name": "Bananas Foster French Toast", "details": "Vanilla crema." }
        ]
      },
      {
        "title": "Brunch Libations",
        "items": [
          { "name": "TDT Bloody Mary", "details": "Classic or spicy." },
          { "name": "Mimosa Flight", "details": "Classic, peach, pineapple." },
          { "name": "Crandaddy Shareable", "details": "Tequila, cranberry, citrus." }
        ]
      }
    ]$$::jsonb,
    'Please inform your server of food allergies before ordering. Our kitchens contain peanuts, tree nuts, fish, shellfish, eggs, milk, soy, and gluten. Cross-contamination is possible.',
    true
  )
on conflict (slug) do update set
  title = excluded.title,
  menu_type = excluded.menu_type,
  location = excluded.location,
  subtitle = excluded.subtitle,
  categories = excluded.categories,
  allergen_notice = excluded.allergen_notice,
  is_published = excluded.is_published,
  updated_at = now();
