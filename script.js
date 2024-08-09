let submitBtm = document.querySelector("#confetti-button");
let outputText = document.querySelector("#output-text");

const people = {
  person_1: {
    name: "Soham Singh Thakur",
    about:
      "Kya beta Soham? Kaka tere ko puch rha tha ki kaise aaj kal chai pine nhi aate 😂",
  },
  person_2: {
    name: "aman_chaudhary9919",
    about: "Aur Aman ka haal bay? Dasiya firu chalek bay? Biryani khaye?",
  },
  person_3: {
    name: "gurkirat",
    about:
      "5th August ko dost log k sath momos Kota chowk pe kha pi rha tha. lekkin ye ni socha mujhe bhi puch lu. Thik h bhai senior ban gya h toh kyu puchega",
  },
  person_4: {
    name: "knowledgejnlibrary",
    about:
      "Bapun bhaiya ek Locker mera aur mere 5 dost log ka mila kr de do na.",
  },
  person_5: {
    name: "Naina Sonkar",
    about: "Tumhare liye yaha ni bolunga Personal me baat krte hain ok!",
  },
  person_6: {
    name: "muskan mishra",
    about:
      "Aur Muskan di kaise ho? Baki uss din photo achhi aayi thi hamari. Send kr du?",
  },
  person_7: {
    name: "sahil singh",
    about:
      "Aur beta Sahil kaisa h tera pair? Sorry bhai iss din birthday me Sanghai Rice ni khila paya",
  },
  person_8: {
    name: "manisha lubana",
    about: "Hello Manisha Di! kaisi ho aap?",
  },
  person_9: {
    name: "abhishek sharma",
    about:
      "Aur Sharma ji kaise ho? Aaj kal senior ban gye ho to bhaw taw hi ni mil rha aapka",
  },
  person_10: {
    name: "nisha tigga",
    about:
      "Kya yrr Nisha kab chale wapis nightout pe? Fir tu peeche baith k agale se baat krna puri time. Kya isi k liye jate hain night out pe. Huhh!",
  },
  person_11: {
    name: "Janvi Dubey",
    about:
      "Thankyou Janvi! batane ki jarurat nhi kyu thanku! aur teri mausi ko mere bare me batana band kab kregi",
  },
  person_12: {
    name: "deepika sahu",
    about:
      "Hey Deep! How's goin? and Thankyou! Lift dene k liye 1st year me college jate waqt 😂",
  },
  person_13: {
    name: "aditya singh parmar",
    about:
      "Kya yarr chota kaisa hai? Yarr tere se bas ek request hai ki jaldi se CA ban yarr apna ko bhi thoda sa role rhega ki iske dost ka bhai CA hai 😎",
  },
  person_14: {
    name: "tushar bwankar",
    about: "Kya bhai Tushar kaisa hai? konsa anime dekh rha aaj kal?",
  },
  person_15: {
    name: "anshu singh rajput",
    about:
      "Yarr Anshu kab banayenge be apan tere ghar me paneer? Tu kuch batata hi nhi",
  },
  person_16: {
    name: "ritika sharma",
    about:
      "Hello Mam, how's your corporate life goin? Aur yarr job start ki toh bhul gyi! Huhh Party kab degi?",
  },
  person_17: {
    name: "muskan singh",
    about: "Aur muskan kaisi hai? abhi wahi job continue kr rhi ya kuch aur?",
  },
  person_18: {
    name: "ved prakash sahu",
    about:
      "Kaisa hai mere bhai? Vedprakash maza aata tha tere sath me class 6th me. Aaj bhi yaad krta hu wo sare din. Milte kisi din?",
  },
  person_19: {
    name: "het nayani",
    about: "Aur bhai Het kya haal chal?",
  },
  person_20: {
    name: "Astha Dixena",
    about: "Look who's here! Astha Dixena. Kaisi hain mam aap?",
  },
  person_21: {
    name: "Rupesh Dongre",
    about: "Kya re bhadawe tu fir aa gya muh marne R.",
  },
  person_22: {
    name: "priya singh",
    about:
      "Hey Priya. How are you? Kya yarr job join ki toh bhul hi gyi! Kisi din milte kya? Party lunga mai job ka pahale hi bata rha",
  },
  person_23: {
    name: "muskan srivastava",
    about: "Aur Sanju kaisi hai? Bhul hi gyi tu toh",
  },
  person_24: {
    name: "aditya raj tiwari",
    about:
      "Aur Tiwari ji kya haal chaal? Yarr! Senior ban gye tum toh College me jab badminton rhe toh bulana jarur Match dekhne aaunga tera",
  },
  person_25: {
    name: "debojit halder",
    about:
      "Aur Debo bhaiya kaise hain? Yarr aap itni mast mast ladkiyan kaha se late ho? Ek aadh mujhe bhi dilao na",
  },
  person_26: {
    name: "pooja sidar",
    about: "Aur Puja di kaise ho aap?",
  },
  person_27: {
    name: "akash upadhyay",
    about:
      "Hello Akash bhaiya kaise hain aap? Yarr aapki chocolates miss kr rha jo aapne khilayi thi jab aaya tha aapke yha",
  },
  person_28: {
    name: "jeet sao",
    about:
      "Aur Jeet bhaiya? Yarr bhari busy rehte ho aap party me hamesha. Kabhi iss gareeb ko bhi le chalo",
  },
  person_29: {
    name: "Gunjan Singh Parmar",
    about:
      "Hello Laddo! Kaisi ho? I still remember jab hum first time Nalanda Parisar me mile the aur tabse toh aapka fan ho gya lekkin aap aaj kal mujhe yaad hi nhi krte 😭 itna busy koi hota h kya?",
  },
  person_30: {
    name: "abhishek pandey",
    about:
      "Aur Abhishek sir kaise ho? Milo yarr kabhi, miss krta hu aapki kahani jo aap Deepak k room pe sunate the",
  },
  person_31: {
    name: "Lakshya Patel",
    about: "Aur bhai Lakshya kaisa hai? Kyaa chal rha aaj kal?",
  },
  person_32: {
    name: "Gaurav Verma",
    about:
      "Kaise bhancha? Kaa haal he? Yarr guru te ha ta senior ban ges yarr. Bhul ges mola?",
  },
  person_33: {
    name: "Sapna Chaudhary",
    about:
      "Hey Sappu kaisi hai? Yarr chal na kahi apan ghumne jate boht man hota h mera wapis se sath me bakchodi krne ka",
  },
  person_34: {
    name: "Narjis Haidry",
    about:
      "Hello Ms Influencer! Kaisi hain aap? Kabhi iss chote insaan ko bhi yaad kr liya kijiye",
  },
  person_35: {
    name: "Nilima Pandey",
    about: "Kaisi hai Nilu? Maza aa rha college me?",
  },
  person_36: {
    name: "Sumit Jain",
    about:
      "Aur Sumit bhaiya kaise hain aap? Yarr wapis kabhi mil hi ni paye apan. Kabhi milte kya?",
  },
  person_37: {
    name: "abhishek bhattacharya",
    about: "Hello Abhishek sir, I really like your personality",
  },
  person_38: {
    name: "Manav",
    about: "Kya yarr Manav kaisa h mere bhai? Aata kabhi kumhari milte fir",
  },
  person_39: {
    name: "Roshan",
    about: "Aur bhai Roshan kaisa hai? Kya chal rha aaj kal?",
  },
  person_40: {
    name: "Aanchal Sonkar",
    about:
      "Look who's here! Aanchal Sonkar. Ye bata wapis kab chal rhe MD, Guava Shots pine! Aur yarr tu uss din pic li thi mere sath aur aaj tak send nhi ki hai, bas dikhane k liye hi pic li thi lagta hai😭",
  },
  person_41: {
    name: "Priyansh Singh Parihar",
    about:
      "Kya yarr chote kaisa hai? Full role h tera toh aaj kal College me. Senior ban gya h tu toh",
  },
  person_42: {
    name: "simran",
    about: "Aur Simran di kaise ho? Sach batau, you look so pretty. Trust me.",
  },
  person_43: {
    name: "sameer tiwari",
    about:
      "Aur bhai Sameer kaisa hai? Yarr uss din train me Ludo khel k maza aaya tha. Wapis milte kabhi?",
  },
  person_44: {
    name: "gunja chaudhary",
    about: "Aur madam kaisi hain aap? Kaha h aaj kal? No msg, no call, why?",
  },
  person_45: {
    name: "srishti thakur",
    about: "Salam Aale kum, Mohtarma. Kaisi hain aap?",
  },
  person_46: {
    name: "chandani verma",
    about:
      "Kaise noni! Sab bane bane? Yarr te au rajendra shaadi kab karbe yarr? Nachana he mola ghalo tumhar man k shaadi ma.",
  },
  person_47: {
    name: "anay",
    about:
      "Abe yarr wo Agrasen chowk wala?Sanghai rice ka price badha diya bhai 😭",
  },
  person_48: {
    name: "Vishwanath Singh Rajput",
    about:
      "Hello sir kaise hain aap? Apne company me refferal de do mujhe bhi, college k sath sath udhar bhi junior ban jaunga.",
  },
  person_49: {
    name: "jyoti malik",
    about:
      "Dekho dekho kon aaya. Jyoti Malik! Kaisi hain aap mam? Bhul hi gyi yarr aap toh.",
  },
  person_50: {
    name: "swarnam singh",
    about:
      "Aur swarnam bhaiya kaise hain aap? Hamesha aap mujhe sandwich khilaye ho chai pilaye ho. Abki milo mai khilaunga aapko.",
  },
  person_51: {
    name: "Vansh",
    about: "Thank you bro gym me meri help krne k liye.",
  },
  person_52: {
    name: "nitish gupta",
    about: "Aur bhai Nitish kaisa hai tu?Kya kr rha aaj kal?",
  },
  person_53: {
    name: "raj chaudhary",
    about: "Lodeyam bhojnam. Kya re bhadu kab aa rha fir idhar?",
  },
  person_54: {
    name: "abhishek chaudhary",
    about:
      "Kaisa hai mere bhai Raman?  Wapis chale kabhi Dasiya Biryani khane. Lekin paise mai dunga.",
  },
  person_55: {
    name: "aditya chaudhary",
    about: "Ka ho raja ka haal bay?",
  },
  person_56: {
    name: "kushagra sharma",
    about:
      "Kaisa h mere bhai Kushagra? Yarr tu Raipur aata h toh btaye toh kr. Miss krta hu tujhe.",
  },
  person_57: {
    name: "aayushi mishra",
    about:
      "Aur Aayushi mam kaisi hain aap? Fir kisi din wapis Farewell k liye dress dene usi shop pe aao. Aur mai xerox karane bagal wale shop pe. Fir milte kisi din. Jk.",
  },
  person_58: {
    name: "palak sen",
    about:
      "Hey hey hey kaisi ho bahan? Yarr apan kab mil rhe 😭. Isi planning me mai buddhha hota ja rha sachhi.",
  },
  person_59: {
    name: "nisha tigga",
    about:
      "Kya yrr Nisha kab chale wapis nightout pe? Fir tu peeche baith k agale se baat krna puri time. Kya isi k liye jate hain night out pe. Huhh!",
  },
  person_60: {
    name: "kunj",
    about: "Jay shree ram bhai Kunj. Kaisa hai yarr?",
  },
  person_61: {
    name: "vipul tiwari",
    about: "Aur bhai Vipul kaha hai aaj kal?",
  },
  person_62: {
    name: "himanshu manikpuri",
    about: "Hello Himanshu sir kaise hain aap?",
  },
  person_63: {
    name: "pratap bagh",
    about: "Aur Pratap bhai kaise ho? Wapis milte kabhi DevFest k alawa bhi.",
  },
  person_64: {
    name: "rohit singh",
    about: "Kya bhai yarr bandi se bhi toh milwa kabhi.",
  },
  person_65: {
    name: "gurkirat",
    about:
      "5th August ko dost log k sath momos Kota chowk pe kha pi rha tha. lekkin ye ni socha mujhe bhi puch lu. Thik h bhai senior ban gya h toh kyu puchega",
  },
  person_66: {
    name: "Naina Sonkar",
    about: "Tumhare liye yaha ni bolunga Personal me baat krte hain ok!",
  },
  person_67: {
    name: "manisha lubana",
    about: "Hello Manisha Di! kaisi ho aap?",
  },
  person_68: {
    name: "abhishek sharma",
    about:
      "Aur Sharma ji kaise ho? Aaj kal senior ban gye ho to bhaw taw hi ni mil rha aapka",
  },
  person_69: {
    name: "Janvi Dubey",
    about:
      "Thankyou Janvi! batane ki jarurat nhi kyu thanku! aur teri mausi ko mere bare me batana band kab kregi",
  },
  person_70: {
    name: "aryan badge",
    about: "Aur Aryan kaisa hai? Yarr Reunion kab hoga bhai",
  },
  person_71: {
    name: "sujal gupta",
    about:
      "Aur gupta ji kaise hain aap? Yarr aap toh milte hi nhi. Mana bade aadmi ho gye hain lekkin hum chote logo ka bhi dhyan rakhenge ki nhi?",
  },
  person_72: {
    name: "muskan singh",
    about: "Aur muskan kaisi hai? abhi wahi job continue kr rhi ya kuch aur?",
  },
  person_73: {
    name: "Goldy",
    about:
      "Hello mam kaisi hain aap? yarr aap toh iss junior ko bhul hi gyi hain",
  },
  person_74: {
    name: "kantru",
    about:
      "Aur sir ji kaise hain? Yarr Personality ho toh aapke jaisi warna jinda toh jhant k baal bhi hain",
  },
  person_75: {
    name: "lakshya patel",
    about: "Kaisa hai mere bhai lakshya? kya chal rha fir aaj kal?",
  },
  person_76: {
    name: "Raman Singh Shekhawat",
    about:
      "Thankyou for always being so caring and supportive. And sorry ik iss website se thoda time waste hua but socha thoda new way me thanku bolu sabko",
  },
  person_77: {
    name: "Sandeep Chaudhary",
    about:
      "Kaisa h hero? kya chal rha aaj kal? Yarr Sandeep kahi chalte kya apan sab ghumne fir waise hi bakarchodi krte last time jaisa?",
  },
  person_78: {
    name: "Gunjan Singh Parmar",
    about:
      "Hello Laddo! Kaisi ho? I still remember jab hum first time Nalanda Parisar me mile the aur tabse toh aapka fan ho gya lekkin bata nahi paaya",
  },
  person_80: {
    name: "Deepak Sharma",
    about:
      "Yarr deepak kab aa rha raipur. aur tu bhai please aise khati khati cheeze mat bheje kar yarr g*nd fatt jata hai",
  },
  person_81: {
    name: "vikas kumar",
    about: "Aur vikash bhaiya kaise ho? milte kisi din kya?",
  },
  person_82: {
    name: "kaushik",
    about: "Kaisa h yarr kaushik? kya kr rha aaj kal?",
  },
  person_83: {
    name: "Chandraprakash sinha",
    about: "Aur mere bhai chandu kaisa hai? kya kr rha fir aaj kal?",
  },
  person_84: {
    name: "Anusha Tirkey",
    about: "Hey Anusha how are you? trust me aawaz kaafi achhi hai teri.",
  },
  person_85: {
    name: "shivam jha",
    about: "Aur shivam bhaiya kaise ho?",
  },
  person_86: {
    name: "Mayank Sharma",
    about:
      "Aur sharma ji kaise hain aap? yarr bhaiya aapki na ek se ek batein miss krta hu jo aap college me batate the kuch toh baat h aapme",
  },
  person_87: {
    name: "tushar sahu",
    about:
      "Kya yarr Badshah bhai kaisa hai? Aunty ko bolna aayush bol rha tha ki aap khana boht achha banate ho",
  },
  person_88: {
    name: "Pawan Sah",
    about:
      "Kya yarr pawan kaisa hai? tera wo kahani bhai aaj bhi yaad hai jab tu apne gadi se ringroad pe gira tha pathhar k wajah se kya mast tha wo 😂😂😂",
  },
  person_89: {
    name: "deepika sahu",
    about:
      "Hey Deep! How's goin? and Thankyou! Lift dene k liye 1st year me college jate waqt 😂",
  },
  person_90: {
    name: "Vishal soni",
    about:
      "Aur bhai vishal kab khila rha yarr aunty k hath ki puri aur tamatar chutney... aunty ko bolna aayush abhi bhi yaad krta h unke hath ka khana",
  },
  person_91: {
    name: "swati singh",
    about:
      "Kya yarr swati kaisi hai? tu toh chai pe kabhi bulati hi ni yarr mai kabse wait kr rha",
  },
  person_92: {
    name: "Harsh Patil",
    about:
      "Kya yarr bhau kaisa hai? abe ek baar wapis wo kaan me bol na(jo tu bolta hai). baki bhau kab milega yarr bhau I miss you na",
  },
  person_93: {
    name: "gaurav Botkule",
    about:
      "Aur Gaurav kaisa hai? kya kr rha aaj kal? Suna hu new gf bani h teri kya ye sach h?",
  },
  person_94: {
    name: "Abhishek Yadav",
    about: "Kaisa chal rha h bhai ka naya rishta😂",
  },
  person_95: {
    name: "mohit chouhan",
    about: "Aur arjun kaisa hai? kya chal aaj kal fir?",
  },
  person_96: {
    name: "avanish pandey",
    about:
      "Tu toh bhai bas apni bandi k sath hi ja burger khane.. mujhe toh lekar jayega nhi. katti",
  },
  person_97: {
    name: "nilay meshram",
    about:
      "Nelay aaj bhi aapka boht thankful hu. Kyun? Aap hi the jisne encourage kiya 11th me books read krna, stocks etc and un sabke wajah se boht effect pada h life me Thankyou bhaiya",
  },
  person_98: {
    name: "minal mishra",
    about:
      "Kya yarr minal kaisi hai tu, tujhe malum tu na boht pyari h. Morning walk pe jati h? Mai bhi chalunga, maza aata h tere sath",
  },
  person_99: {
    name: "shubham singh",
    about:
      "Aur shubham bhaiya kaise ho aap. Sach batau toh chota tha toh boht hate krta tha aapko, wahi sab aap jo chidate the mujhe Fuaa bol kr. Lekkin aaj kal wahi sab yaad aata hai Aur ab achha lagata jab aap kabhi bhi milte ho chote bhai jaise puchate ho kaisa h kya kr rha etc. Baki kaisa rha Kanvar yatra",
  },
  person_100: {
    name: "raman mall",
    about:
      "Mast aadmi ho yarr aap Raman bhaiya, achha lagata hai milta hu aapse aur aap chote bhai k jaise pyar se puchate ho kaisa h kya kr rha. Jaldi shaadi wadi kro yarr mujhe bhi mauka do shaadi me nachne ka😂",
  },
  person_101: {
    name: "dohit rajput",
    about:
      "Tere liye mere pass bas yhi h kehno ko Tere liye shabd kam h mere pass bhai.",
  },
  person_102: {
    name: "detriv verma",
    about: "abe aa na kisi din manchurian khayenge",
  },
  person_103: {
    name: "prachi alha",
    about: "Ab tere liye kya likhu tu sab janti h mere bare me",
  },
};

submitBtm.addEventListener("click", function () {
  let input = document.querySelector("#input-txt");
  let inputText = input.value;
  let found = false;

  for (let key in people) {
    if (people[key].name.toLowerCase().includes(inputText.trim())) {
      outputText.textContent = people[key].about;
      found = true;
      break;
    }
  }

  if (!found) {
    outputText.textContent = `Sorry, I don't have anything about you in my memory.`;
  }
});
