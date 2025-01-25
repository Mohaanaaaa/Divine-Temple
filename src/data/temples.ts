
export interface Temple {
  id: string;
  name: string;
  area: string;
  history: string;
  timings: string;
  mainDeity: string;
  specialPujas: string[];
  image: string;
  address: string;
  mapLink: string; // New property for the Google Maps link
}

export interface Area {
  id: string;
  name: string;
  temples: Temple[];
}

export const bengaluruAreas: Area[] = [
    {
      id: "basavanagudi",
      name: "Basavanagudi",
      temples: [
        {
          id: "Shri Dodda Ganapathi Temple",
          name: "Shri Dodda Ganapathi Temple",
          area: "Basavanagudi",
          history: "the Bull temple after which it was named, Basavanagudi is one of the oldest localities in the vibrant metropolitan of Bengaluru, with structures replete with character, architecture and rich history. Numerous old and beautiful temples define the true essence of this green locality filled with chirpy markets like the colourful Gandhi Bazaar, many parks with ancient trees, a wide range of unique eateries and dotted with tiny lakes. Taking a stroll here is full of Malgudi Days throwback moments since this pretty lush green neighbourhood has still retained its old-world charm, which might remind you of scenes and stories from the popular collection of short stories by RK Narayan. From a stately old spacious home that once belonged to the Diwan of Mysore, a shop in a heritage family home, a 100-year old home that has turned into a reservoir of modern art, there is a lot of cultural confluence at every step.",
          timings: "6 am-12:30 pm, 5:30-8:30 pm",
          mainDeity: "Dodda Ganpati (lord ganesh)",
          specialPujas: ["ganesh chaturthi, Kadalekai Parishe"],
          image :"https://www.explorebees.com/uploads/Shree%20Dodda%20Ganapathi%20Temple%20(3).jpg",
          address: " Shri Dodda Ganapathi Temple, 235, Bull Temple Road, Basavanagudi, Bengaluru, Karnataka 560004",
          mapLink:'https://maps.app.goo.gl/ymW7DDLwKwEiyUwU7'
        },
        {
          id: "bull-temple",
          name: "Bull Temple  (Shri Doddabasavanna Temple)",
          area: "Basavanagudi",
          history: "Built in the 16th century by Kempe Gowda, this temple features a massive monolithic statue of Nandi.",
          timings: "6:00 AM - 8:00 PM",
          mainDeity: "Nandi (Bull)",
          specialPujas: ["Kadalekai Parishe", "Monthly New Moon Puja"],
          image: "https://www.shutterstock.com/image-photo/bangalore-karnataka-india-october-20-600nw-1224752452.jpg",
          address: "Bull Temple Rd, Basavanagudi, Bengaluru",
          mapLink: "https://maps.app.goo.gl/w6cY2fs1WbnKsdTt9"// Example Google Maps link
        },
        {
          id: "shri Karanji anjaneyaswamy ",
          name: "Shri Karanji Anjaneyaswamy Temple",
          area: "Basavanagudi",
          history: "This famous Hanuman temple in Bangalore is located very close to the Big Bull temple – “Basavana Gudi” and Shri Dodda Ganapati temple. Further historians have drawn similarities in the artwork and sculptural nuances of the idols of Dodda Ganapati, Big Bull, and Anjaneya – hence there is a popular theory that even Karanji Anjaneya Swamy Temple was built around the 15th century by Kempe Gowda I.There is also an interesting tale on how the word “Karanji” used to refer to the temple. It is believed that Kerenji Anjaneya temple was on the banks of a lake – hence “Kere” in Kannada is a lake or tank and “Anji” is Anchu or border together giving it the name “Karanji”.",
          timings: "7 am–12 pm, 5:30–8:30 pm",
          mainDeity: "Shri Gali Anjaneya Swami(Lord Hanuman)",
          specialPujas: ["Hanuman Jayanti" ,"Saturdays Special Archana"],
          image: "https://content.jdmagicbox.com/v2/comp/bangalore/p1/080pxx80.xx80.130812131151.u2p1/catalogue/karanji-anjaneya-temple-basavanagudi-bangalore-temples-5di44so4iq.jpg",
          address: "Shri Karanji Anjaneyaswamy Temple, 14/3, Bugle Rock Rd, Gandhi Bazaar, Basavanagudi, Bengaluru, Karnataka 560004",
          mapLink:'https://maps.app.goo.gl/YFqXEJNvRDHZdjnk7'
        }
      ]
    },
    {
      id: "Banashankari",
      name: "Banashankari",
      temples: [
        {
          id: "shri Banashankari Devi Temple",
          name: "Shri Banashankari Devi Temple",
          area: "Banashankari",
          history: "Banashankari Temple, an ancient and sacred place of worship located in Bangalore, India. The temple is dedicated to Goddess Banashankari, also known as Shakambari Devi, an incarnation of Goddess Parvati. Banashankari Temple’s history dates back to the Chola period and was later renovated during the reign of Kempe Gowda I, the founder of Bangalore. The temple’s name is derived from the words “bana,” meaning arrow, and “Shankari,” referring to Goddess Parvati. Legend has it that the temple was built to commemorate the victory of Goddess Banashankari over the demon Durgamasura.",
          timings: "6 am–1 pm, 4:30–9 pm",
          mainDeity: "Banashankari Devi",
          specialPujas: ["Navaratri: Navaratri meaning “nine nights,” is a significant Hindu festival celebrated in honour of Goddess Durga. The Navaratri celebrations at the Banashankari Amma Temple and also conducted during the nine nights. Various cultural programs, including classical music and dance performances, are organized as part of the festivities."],
          image: "https://www.electronic-city.in/images/places/banashankari-250.gif",
          address: "Kanakapura Rd, Sarbandapalya, Banashankari Temple Ward, Bengaluru, Karnataka 560070",
          mapLink:'https://maps.app.goo.gl/vUb8ZYsxbZZLGGoH8'
        }
      ]
    },
    
    
    {
      id: "begur bangalore",
      name: "Begur ",
      temples: [
        {
          id: "Shri Panchalinga Nageshwara ",
          name: "Shri Panchalinga Nageshwara Temple",
          area: "Begur ",
          history: "The Nageshvara temple complex (also spelt Nagesvara and called Naganatheshvara locally) is located in Begur, a small town within the Bangalore urban district of Karnataka state, India. Two shrines within the temple complex, the Nageshvara swamy main deity was consecrated by Rishi’s and temple were commissioned during the rule of Western Ganga dynasty kings Nitimarga I (also called Ereganga Neetimarga, r. 843–870) and Ereyappa Nitimarga II (also called Ereganga Neetimarga II, r. 907–921). The remaining shrines are considered a later day legacy of the rule of the Chola dynasty, Hoysala dynasty, Vijayanagara Empire over the region. Ravana villain in Ramayana lost his atma linga in Gokarna and while returning to Sri Lanka he worshiped Nageshwara.[1] An Old Kannada inscription, dated c. 890, that describes a Bengaluru war (modern Bangalore city) was discovered in this temple complex by the epigraphist R. Narasimhachar. The inscription is recorded in Epigraphia Carnatica (Vol 10 supplementary). This is the earliest evidence of the existence of a place called Bengaluru.",
          timings: "",
          mainDeity: "Panchalinga",
          specialPujas: [" Special pujas are performed in the temple mahashivratri and karthika masam."],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSHgY0fhguNPE2F2peq8pX_Y7RAMk4ynnOsg&s",
          address: "Shri Panchalinga Nageshwara Temple, BBMP office, Begur Rd, opposite to Begur, Begur, Bengaluru, Karnataka 560068",
          mapLink:'https://maps.app.goo.gl/5rb7rVtGkcY3QLSy8'
        }
      ]
    },
    {
      id: "bannerghatta",
      name: "Bannerghatta",
      temples: [
        {
          id: "Shri Champakadhama Swamy",
          name: "Shri Champakadhama Swamy Temple",
          area: "Bannerghatta",
          history: "The Champakadhama Temple is located in a distance of 20 km from Bangalore in Bannerghatta. This historical Champakadhama temple at Bannerghatta is dedicated to Lord Champakadhama incarnation of Lord Vishnu.The Temple is maintained by Government of Karnataka. It houses unique stone scriptures. Champakadhama is another name of Lord Rama or Vishnu. The history of the temple dates back to 12th century. As per the inscriptions found here, it is believed that the Champakadhama Temple was built in 1257 during Hoysala period under the ruler Tamilarasa. You can also see the writing which belongs to the 12th century as soon as you enter the temple premises.The shrine houses idol of Lord Champakadhama along with Goddess Lakshmi and Goddess Bhoodevi. You can also visit temples dedicated to Lord Narasimha and Lord Sampangi on a hillock located behind the Champakadhama temple.",
          timings: "6 am–1 pm, 4–8 pm",
          mainDeity: "Shri Champakadhama Swamy Temple(Lord vishnu)",
          specialPujas: ["Vaikuntha Ekadashi and sarvana masam"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbrqz6TWIHEkScxCoZ3ojcHHGmlffo1WVJA&s",
          address: "Shri Champakadhama Swamy Temple, Pillaganahalli, Bannerghatta, Bengaluru, Karnataka 560083",
          mapLink:'https://maps.app.goo.gl/ZarWSoYCXA21yo1L7'
        }
      ]
    },
    {
      id: "chickpet",
      name: "Chickpet",
      temples: [
        {
          id: "venkateshwara-temple",
          name: "Shri Chickpet Venkateshwara Temple",
          area: "Chickpet",
          history: "Dating back to the 17th century, this temple is one of the oldest Venkateshwara temples in Bengaluru.",
          timings: "6:00 AM - 12:00 PM, 5:30 PM - 8:30 PM",
          mainDeity: "Lord Venkateshwara",
          specialPujas: ["Vaikunta Ekadashi", "Saturdays Special Archana"],
          image: "https://lh3.googleusercontent.com/p/AF1QipOiB9GH_rvqGCQO_grrhVcgkBL-N16ZolZM4yD7=s1360-w1360-h1020",
          address: "Chickpet Main Rd, Bengaluru",
          mapLink: "https://goo.gl/maps/example1"
        }
      ]
    },
    {
      id: "domlur",
      name: "Domlur",
      temples: [
        {
          id: "chokkanathaswamy-temple",
          name: "Shri Chokkanathaswamy Temple",
          area: "Domlur",
          history: "Dating back to the 10th century AD, this temple is dedicated to Lord Vishnu and showcases stunning Vijayanagara-style architecture.",
          timings: "6:00 AM - 12:00 PM, 5:00 PM - 8:30 PM",
          mainDeity: "Lord Vishnu",
          specialPujas: ["Vaikunta Ekadashi", "Krishna Janmashtami"],
          image: "https://content.jdmagicbox.com/v2/comp/bangalore/u9/080pxx80.xx80.131105132646.e3u9/catalogue/chokkanatha-swamy-temple-domlur-bangalore-temples-20xtbsxxwl.jpg",
          address: "Domlur Layout, Bengaluru",
          mapLink: 'https://maps.app.goo.gl/gfJVFMy3PgPRw9hG7'
        }
      ]
    },
    {
      id: "gavipuram guttahalli",
      name: "Gavipuram Guttahalli",
      temples: [
        {
          id: "Gavi Gangadhareshwara Temple",
          name: "Shri Gavi Gangadhareshwara Temple",
          area: "Gavipuram Guttahalli",
          history: "Gavi Gangadhareshwara Temple, or Sri Gangaadhareshwara, also Gavipura Cave Temple, an example of Indian rock-cut architecture, is located in Bengaluru in the state of Karnataka in India. The temple is famous for its mysterious stone discs in the forecourt and the exact planning allowing the sun to shine on the shrine during certain time of the year. It was built in the 16th century by Kempe Gowda I, the founder of the city.",
          timings: "6:00 AM - 8:00 PM",
          mainDeity: "lord shiva",
          specialPujas: ["On the occasion of Makar Sankranti, the temple witnesses a unique phenomenon in the evening where sunlight passes through an arc between the horns of Nandi and falls directly on the linga inside the cave and illuminating the interior idol for an hour. Lakhs of devotees come in mid January every year on Makar sankranti day to this cave temple."],
          image: "https://myoksha.com/wp-content/uploads/2016/04/Gavi-Gangadhareshwara-Temple.jpg",
          address: "5th Main Rd, Gavipuram Extention, Kempegowda Nagar, Bengaluru, Karnataka 560019",
          mapLink:'https://maps.app.goo.gl/9FQZ9bF5EFob9Jty6'
        },
        {
          id: "shri Bande Mahakali ",
          name: "Shri Bande Mahakali Temple",
          area: "Gavipuram Guttahalli (Kempegowda Nagar)",
          history: "Sri Bande Mahakali Devalaya is one of the oldest temple (1200 years old)in Bengaluru. This temple is located in Gavipuram Guttahalli dedicated to Goddess Sri Mahakali one of the most fearful manifestations of the Supreme God. This Temple is situated on a small hillock on the banks of Kempambudhi lake",
          timings: "6:30 am–8:30 pm",
          mainDeity: "Devotees beliefs that people who is affected by black magic if they come and visit Mahakali 3 days they will get rid from black magic.",
          specialPujas: ["Mahakali Amma"],
          image: "https://i.ytimg.com/vi/rBFEH9FzTEw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzUfaeelHBKe4twF4k_ZCJ4ZiiXA.jpg",
          address: "No 75, shri Bande, Mahakali Temple, Kempabudhi kere yeri, Gavipuram Guttahalli, Kempegowda Nagar, Bengaluru, Karnataka 560019",
          mapLink:'https://maps.app.goo.gl/q4Ji3AbiYVjCqKW39'
        }
      ]
    },

    {
      id: "gandhi Nagar (Majestic) bangalore",
      name: "Gandhi Nagar(Majestic) ",
      temples: [
        {
          id: "Sri Annamma Devi Mahasamsthana",
          name: "Sri Annamma Devi Mahasamsthana",
          area: "Gandhi Nagar s(Majestic) ",
          history: "The historic Sri Annamma Devi Temple, the city goddess of Bangalore, is located in Gandhinagar, the heart of Bangalore, just 500 meters from the Majestic. The main deity of this temple is Annamma, who is worshipped in the form of the seven matrikas. She is also known as the presiding deity of the city, the guardian deity of Bangalore, the village deity and the Navashakti Anamma. This world-famous temple is visited by people from all over the world. This temple is one of the oldest temples in Bangalore. The Sri Annam Devi Temple is a temple built around the 10th century. There is a story that Annam Devi emerged many years ago in the form of Sapta Matrikeya through seven small stones in the land of Muniswamanna and Anneppa. This temple was built by her family and the temple is managed by the family. It is said that Kempegowda, the builder of Bangalore, was a major devotee of Annam Devi. ",
          timings: "6 am–10 pm",
          mainDeity: "Sri Annamma Devi ",
          specialPujas: ["the month of Chaitra. Special pujas are performed in the temple and special decorative pujas are performed for 9 days during Navratri and also  during festivals like Yugadhi, Dasara, Diwali."],
          image: "https://templeinkarnataka.com/wp-content/uploads/2024/08/Sri-Annamma-Devi-Mahasamsthana-Bangalore.jpg",
          address: "Sri Annamma Devi Mahasamsthana, Subedar Chatram Rd, Gandhi Nagar, near Majestic, Bengaluru, Karnataka 560009",
          mapLink:'https://maps.app.goo.gl/K9zBFSFaRWgLXXow5'
        }
      ]
    },
    {
      id: "huskur",
      name: "Huskur",
      temples: [
        {
          id: "madduramma-temple",
          name: "Sri Madduramma Temple",
          area: "Huskur",
          history: "Dating back to the 11th century AD, this temple is dedicated to Goddess Madduramma, a form of Shakti.",
          timings: "6:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
          mainDeity: "Goddess Madduramma",
          specialPujas: ["Navaratri", "Tuesday Special Abhishekam"],
          image: "https://content3.jdmagicbox.com/v2/comp/bangalore/l3/080pxx80.xx80.191120200106.v6l3/catalogue/sri-madduramma-devi-temple-huskur-bangalore-temples-fzge4ja9x9.jpg",
          address: "Huskur, Bengaluru",
          mapLink: 'https://maps.app.goo.gl/Pb3wDeECtmUsDZZt8'
        }
      ]
    },
    {
      id: "halasuru",
      name: "Halasuru",
      temples: [
        {
          id: "halasuru-someshwara",
          name: "Shri Halasuru Someshwara Temple",
          area: "Halasuru (Ulsoor)",
          history: "Constructed during the Chola period, this temple is dedicated to Lord Shiva and showcases intricate carvings.",
          timings: "6:00 AM - 12:00 PM, 5:30 PM - 9:00 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Maha Shivaratri", "Pradosha Puja"],
          image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Gopura_of_Someshwara_temple_%2816th_century%29_in_Bengaluru.JPG",
          address: "Someshwarapura, Halasuru, Bengaluru",
          mapLink: "https://maps.app.goo.gl/2xE4uZNzzUyGKNcY8"
        }
      ]
    },
    {
      id: "jayanagar",
      name: "Jayanagar",
      temples: [
        {
          id: "ragigudda",
          name: "Ragigudda Sri Prasanna Anjaneya Temple",
          area: "Jayanagar",
          history: "Built in 1969, this temple is dedicated to Lord Hanuman and sits atop a rocky hill.",
          timings: "7:00 AM - 12:00 PM, 4:00 PM - 8:00 PM",
          mainDeity: "Lord Hanuman",
          specialPujas: ["Hanuman Jayanti", "Saturday Special Abhisheka"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6mPK77_mG5nfkLGG5bahcDbguWASG9N9yw&s",
          address: "9th Block, Jayanagar, Bengaluru",
          mapLink: "https://maps.app.goo.gl/hA1TqR4PjVW2JWDQ9"
        }
      ]
    },
    
    {
      id: "malleswaram",
      name: "Malleswaram",
      temples: [
        {
          id: "kadu-malleshwara",
          name: "Shri Kadu Malleshwara Temple",
          area: "Malleswaram",
          history: "Ancient Shiva temple that gave Malleswaram its name, dating back to the 17th century.",
          timings: "6:30 AM - 12:00 PM, 5:00 PM - 8:30 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Maha Shivaratri", "Monthly Shivratri"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFMuc7SSOoAr9QSRrMIt22JqUpdT4d7kq8g&s",
          address: "15th Cross, Malleswaram, Bengaluru",
          mapLink: 'https://maps.app.goo.gl/Zd72iC9t3x727sY76'
        },
        {
          id: "sri dakshinamukha Nandi ",
          name: "Sri Dakshinamukha Nandi Tirtha Kalyani Kshetra",
          area: "Malleswaram",
          history: "Sri Dakshinamukha Nandi Tirtha Kalyani Kshetra is a small temple located in front of the Gangamma temple and diagonally opposite to the Kadu Malleshwara temple on 2nd Temple Street, Malleswaram layout in the north-western area of Bangalore city, Karnataka, India.The temple is also known as Nandi Tirtha, Nandishwara teertha, Basava teertha or simply as Malleswaram Nandi gudi. The main deity of the temple is Shiva,in the form of a Shiva Linga (lingam).The temple was rediscovered in 1997 after being buried for 400 years.",
          timings: "7:30 am–12 pm, 5–8:30 pm",
          mainDeity: "lord shiva, Lord Anjaneya (Lord Hanuman).",
          specialPujas: ["mahashivratri and karthika masam, Kadalekai Parishe"],
          image: "https://travelinbox.wordpress.com/wp-content/uploads/2010/09/nanditeertha_entrance.jpg",
          address: " Sri Dakshinamukha Nandi temple, 2nd Temple Street, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003",
          mapLink:'https://maps.app.goo.gl/8F2qMKuPZ51A7nTn7'
        }
      ]
    },
    {
      id: "mysore Road  ",
      name: "Mysore Road ",
      temples: [
        {
          id: "Shri Gali Anjaneya Swami Temple",
          name: "Shri Gali Anjaneya Swami Temple",
          area: "Mysore Road ",
          history: "the temple located in the heart of the Bangalore city, 5km away from the KR Market. On the Mysore road, in the middle of the busy street of Byatarayanapura is a famous Hanuman temple known as Gali Anjaneya Temple.The statue of Lord Hanuman here is installed by the Hindu saint, Sri Vyasa Raja. He is said to have installed 732 idols of Lord Hanuman and one of which is the Gali Anjaneya. The statue of the Lord faces the devotees and hence a lot of them come here to seek his blessings. Since, Lord Hanuman is the son of the Wind god the idol here is christened as Gali Anjaneya. The temple was constructed in the year 1425 and has a history of close to 600 years. Legend says that Vyasa Raja installed the statue here as there was a confluence of the rivers Vrishabhavati and Paschimavati which has now turned into a drainage. Gali Anjaneya temple has a tall tower and the God here west facing. Always smeared with the sacred saffron paste, considered to be the favourite of Hanuman, the same along with a sacred thread is given to the devotees as prasadam. The tail of Lord here has a bell tied to it at the end, indicating the signature style of Sri Vyasaraja. The statue of the Lord also has a moustache, which makes him look all the more manly. The left hand rests on the waist while the right hand is in the blessing posture. Another uniqueness of the statue here is that the Lord Hanuman is in the calm stature.",
          timings: "",
          mainDeity: "Shri Gali Anjaneya Swami(Lord Hanuman)",
          specialPujas: ["null"],
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/44/bf/the-main-road-outside.jpg?w=1200&h=-1&s=1",
          address: "Shri Gali Anjaneya Swami Temple, Mysore Road, Byatarayanapura New Extn, Kavika Lay Out, Banashankari, Bengaluru, Karnataka 560026",
          mapLink:'https://maps.app.goo.gl/obkBnSTAQJXYKb1b9'
        }
      ]
    },
    {
      id: "madiwala",
      name: "Madiwala",
      temples: [
        {
          id: "old-madiwala-someshwara",
          name: "Old Shri Madiwala Someshwara Temple",
          area: "Madiwala",
          history: "This 13th-century temple is one of the oldest in Bengaluru, dedicated to Lord Shiva.",
          timings: "6:30 AM - 12:30 PM, 5:30 PM - 8:30 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Maha Shivaratri", "Rudrabhisheka"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrh6UaaCQZlPIz7xou3W7ezm3TxPp9__zKCg&s",
          address: "Madiwala, Bengaluru",
          mapLink: "https://goo.gl/maps/example1"
        }
      ]
    },
    {
      id: "marathahalli",
      name: "Marathahalli",
      temples: [
        {
          id: "someshwara-temple",
          name: "Shri Someshwara Temple",
          area: "Marathahalli",
          history: "This 1508 AD temple is dedicated to Lord Shiva and showcases rich carvings and Dravidian architecture.",
          timings: "6:00 AM - 1:00 PM, 5:00 PM - 9:00 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Pradosha Puja", "Maha Shivaratri"],
          image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7LHckH54vecEdsxo820xrl-BY7ZRNVpJseABmLMtUmc3mz5vIzoE2UMusczQ-yxRWynjJu-gMJvSVSLqpq7j98kDCJjlXsTaoAwJa7nqBo5e_xnY5nLrxtBxumcpgcmS8Pnp18qDt1Ps/s1600/Sri+Someshwara+temple+%252C+Marathahalli+-+Gopuram.jpg",
          address: "Marathahalli, Bengaluru",
          mapLink: "https://goo.gl/maps/example1"
        }
      ]
    },
    
    
    
    {
      id: "kengeri",
      name: "Kengeri",
      temples: [
        {
          id: "eshwara-temple",
          name: "Shri Eshwara Temple",
          area: "Kengeri",
          history: "Built in 1050 AD, this ancient temple is dedicated to Lord Shiva and features exquisite architecture.",
          timings: "6:00 AM - 12:30 PM, 5:30 PM - 8:00 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Maha Shivaratri", "Pradosha Puja"],
          image: "https://images.unsplash.com/photo-1576267423445-d74d287a8912?auto=format&fit=crop&q=80",
          address: "Kengeri Satellite Town, Bengaluru",
          mapLink: "https://maps.app.goo.gl/KgiWQyHjevGC93gAA"
        }
      ]
    },
    {
      id: "kondrahalli",
      name: "Kondrahalli",
      temples: [
        {
          id: "dharmesvara-temple",
          name: "Shri Dharmesvara Temple",
          area: "Kondrahalli",
          history: "Built in 1065 AD, this temple is a historic landmark dedicated to Lord Shiva.",
          timings: "6:00 AM - 1:00 PM, 5:30 PM - 9:00 PM",
          mainDeity: "Lord Shiva",
          specialPujas: ["Maha Shivaratri", "Pradosha Puja"],
          image: "https://i.ytimg.com/vi/k-jJ6I8FNNs/maxresdefault.jpg",
          address: "Kondrahalli, Bengaluru",
          mapLink: "https://goo.gl/maps/example1"
        }
      ]
    },
    
    
    {
      id: "nagarathpet",
      name: "Nagarathpet",
      temples: [
        {
          id: "kaalikaamba-kamatheshwara",
          name: "Shri Kaalikaamba Kamatheshwara Temple",
          area: "Nagarathpet",
          history: "Constructed in the 13th century, this temple is dedicated to Goddess Kaalikaamba and Lord Shiva.",
          timings: "6:00 AM - 12:30 PM, 5:30 PM - 9:00 PM",
          mainDeity: "Goddess Kaalikaamba and Lord Shiva",
          specialPujas: ["Navaratri", "Maha Shivaratri"],
          image: "https://images.unsplash.com/photo-1581795284895-fafc0ed53a2a?auto=format&fit=crop&q=80",
          address: "Nagarathpet, Bengaluru",
          mapLink: "https://goo.gl/maps/example1"
        },
        {
          id: "Shri Dharmaraya Swamy Temple ",
          name: "Shri Dharmaraya Swamy Temple ",
          area: "Nagarathpete (chikkapete) ",
          history: "Shri Dharmaraya Swamy Temple is one of the oldest and most famous Hindu temples of the city of Bangalore, in Karnataka, India.The Dharmaraya Swamy Temple was built over eight hundred years ago by the Vahni Kula Kshatriyas going back to the Chalukya dynasty; King Someshwara is mentioned in a stone inscription at Hottal taluk, Naded district, Maharashtra. The community continued in Bengaluru as one of the area's oldest social groups, an agricultural community who tilled the soil and grew vegetables and flowers.",
          timings: "10 am–1 pm, 4–8:30 pm",
          mainDeity: "The Karaga festival is one of the oldest festivals of the state and is celebrated by grand performances by dancers and musicians on the streets outside the temple. It is celebrated to honor Draupadi, the consort of the Pandavas, and signifies the power of women.The festival finds its origin from the Mahabharata and signifies the emergence of Draupadi as a symbol of strength and femininity.",
          specialPujas: ["March-April (For the Karaga Festival)."],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVYV0HJAzpubVG7eBb6--zn09vIAC5tQVMg&s.jpg",
          address: " Sri Dharmaraya Swamy Temple Main Road, Old Taluk Cutchery Road, Nagarathpete, Bengaluru  – 560002",
          mapLink:'https://maps.app.goo.gl/9MDkbhFZnwFmUKvd9'
        }
      ]
    },
    
    {
      id: "Rajarajeshwari Nagar bangalore",
      name: "Rajarajeshwari Nagar ",
      temples: [
        {
          id: "Shrungagiri Sri Shanmukha Swami",
          name: "Shri Shrungagiri Sri Shanmukha Swami Gudi",
          area: "Rajarajeshwari Nagar ",
          history: "One of the unique temples in Bangalore is the Sri Shanmukha Swami Temple in Rajarajeshwari nagar.With 6 faces of Lord Shanmukha as the gopuram, this temple is another cave temple dedicated to Lord Muruga. Shanmukha means Six Faced God. and  temple is under the Sringeri Mutt management. And the temple has many prominent features such as the tall standing Trishul. The temple also has a dome made up of 2500 crystals, which is used to illuminate from natural sun rays.The temple is situated on top of a hill Shrungagiri. There are set of 200 steps that take the devotees to the temple. You can take a cab service for an extra charge of Rupees 20 per person that takes you to the top of the hill.",
          timings: "7 am–12:30 pm, 4:30–9 pm",
          mainDeity: "Sri Shanmukha Swami  (Lord muruga).",
          specialPujas: ["null"],
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCP_HmWEz5VRY5XwefBew9oOKOh-9Dy8ASg&s" ,
          address: "Sri Shanmukha Swami Gudi, BEML, Kempegowda Rd, 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
          mapLink:'https://maps.app.goo.gl/wBJMVF7JeaYWZqMQ7'
        }
      ]
    },
    {
      id: "thindlu",
      name: "Thindlu",
      temples: [
        {
          id: "veerabhadra-swamy-temple",
          name: "Sri Veerabhadra Swamy Temple",
          area: "Thindlu",
          history: "Dating back to the 10th century AD, this temple is dedicated to Sri Veerabhadra, a fierce form of Lord Shiva.",
          timings: "6:30 AM - 12:00 PM, 5:00 PM - 8:30 PM",
          mainDeity: "Sri Veerabhadra",
          specialPujas: ["Maha Shivaratri", "Veerabhadra Jayanti"],
          image: "https://content3.jdmagicbox.com/v2/comp/bangalore/d4/080pxx80.xx80.180328020231.a3d4/catalogue/veerabhadra-swamy-temple-vidyaranyapura-bangalore-temples-j0p8gybdvh.jpg",
          address: "Thindlu Main Rd, Bengaluru",
          mapLink: "https://maps.app.goo.gl/jPhGENfvHfRS6oYv7"
        }
      ]
    }
];

export const latestNews = [
 {
    id: "1",
    title: "Makar Sankranti @ Shri Gavi Gangadhareshwara Temple",
    date:"2025-01-14/15",
    catefory: "Cultural",
    description:" Celebrated on January 15, 2024, sunlight passes through an arc between the horns of Nandi and falls directly on the linga inside the cave and illuminating the interior idol for an hour. Try see the valuable nature magic on that day"
  }, 
];
