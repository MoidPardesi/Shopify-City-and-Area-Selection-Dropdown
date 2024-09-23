
class CitySelection extends HTMLElement {
  constructor() {
    super(); // Ensure proper initialization of the custom element

    // Mapping of cities to Emirates with matching values
    this.cityToEmirateMapping = {
      Dubai: "DU",
      "Abu Dhabi": "AZ",
      Sharjah: "SH",
      Ajman: "AJ",
      Fujairah: "FU",
      "Ras al-Khaimah": "RK",
      "Umm al-Quwain": "UQ",
    };

     // Cities and their areas
    this.cityAreaList = {
      Dubai: [
        "Academic City", "Akoya Oxygen", "Al Awir", "Al Bada'a", "Al Baraha", "Al Barari", "Al Barsha 1", "Al Barsha 2", "Al Barsha 3",
        "Al Barsha South", "Al Dhagaya", "Al Furjan", "Al Garhoud", "Al Ghadeer", "Al Ghubaiba DXB", "Al Hamriya", "Al Hudaiba DXB",
        "Al Jaddaf", "Al Jaffiliya", "Al Karama", "Al Khabaisi DXB", "Al Khawaneej 1", "Al Khawaneej 2", "Al Mamzar DXB", "Al Manara",
        "Al Mankhool", "Al Mina DXB", "Al Mizhar 1", "Al Mizhar 2", "Al Muntazah DXB", "Al Muraqqabat", "Al Murar", "Al Mushrif DXB",
        "Al Muteena", "Al Nahda 1", "Al Nahda 2", "Al Quoz 1", "Al Quoz 2", "Al Quoz 3", "Al Quoz 4", "Al Quoz Industrial Area 1",
        "Al Quoz Industrial Area 2", "Al Quoz Industrial Area 3", "Al Quoz Industrial Area 4", "Al Qusais 1", "Al Qusais 2", "Al Qusais 3",
        "Al Qusais Industrial Area 1", "Al Qusais Industrial Area 2", "Al Qusais Industrial Area 3", "Al Qusais Industrial Area 4",
        "Al Qusais Industrial Area 5", "Al Raffa", "Al Ras", "Al Rashidiya", "Al Rigga", "Al Sabkha DXB", "Al Safa 1", "Al Safa 2", 
        "Al Satwa", "Al Shindagha", "Al Souq Al Kabeer", "Al Sufouh 1", "Al Sufouh 2", "Al Twar 1", "Al Twar 2", "Al Twar 3", "Al Waheda",
        "Al Warqa 1", "Al Warqa 2", "Al Warqa 3", "Al Warqa 4", "Al Warqa 5", "Al Wasl", "Arabian Ranches", "Arabian Ranches 2",
        "Arabian Ranches 3", "Arjan", "Baniyas Square", "Barsha Heights - TECOM", "BlueWaters Island", "Bukadra", "Bur Dubai", 
        "Business Bay", "Corniche Deira", "Damac Hills", "Deira", "Deira Water Front", "DIFC", "Discovery Gardens", "Downtown Dubai",
        "Downtown Jebel Ali", "Dubai Airport Freezone", "Dubai Cargo Village", "Dubai Design District", "Dubai Falcon City", "Dubai Festival City",
        "Dubai Healthcare City", "Dubai Hills", "Dubai International Airport", "Dubai Internet City - DIC", "Dubai Investments Park 1",
        "Dubai Investments Park 2", "Dubai Lifestyle City", "Dubai Marina", "Dubai Maritime City", "Dubai Media City", "Dubai Motor City",
        "Dubai Silicon Oasis", "Dubai South", "Dubai Sports City", "Dubai Studio City", "Dubai Techno Park", "Dubai World Central - DWC",
        "Dubai World Trade Center - DWTC", "Emirates Hills", "Expo 2020", "Gardens", "Global Village", "Green Community - DIP",
        "Green Community Motor City", "Hor Al Anz", "Hor Al Anz East", "Ibn Batutta Mall", "IMPZ", "International City", "International City 2",
        "Jebel Ali 1", "Jebel Ali 2", "Jebel Ali Freezone", "Jebel Ali Freezone Extension", "Jebel Ali Hills", "Jebel Ali Industrial Area",
        "Jebel Ali Village", "Jumeirah 1", "Jumeirah 2", "Jumeirah 3", "Jumeirah Beach Residence - JBR", "Jumeirah Garden City",
        "Jumeirah Golf Estates", "Jumeirah Heights", "Jumeirah Islands", "Jumeirah Lakes Towers - JLT", "Jumeirah Park", "Jumeirah Village Circle - JVC",
        "Jumeirah Village Triangle - JVT", "Knowledge Village", "Layan Community", "Legends", "Liwan", "Majan", "Meadows", "Meydan South",
        "Mira Community", "Mirdif", "Mohammed Bin Rashed City", "Mudon", "Muhaisnah 1", "Muhaisnah 2", "Muhaisnah 3", "Muhaisnah 4",
        "Nad Al Sheba 1", "Nad Al Sheba 2", "Nad Al Sheba 3", "Nad Al Sheba 4", "Nad Shamma", "Nadd Al Hamar", "Naif", "Oud Al Muteena",
        "Oud Metha", "Palm Jumeirah", "Port Rashid", "Port Saeed", "Ras Al Khor", "Ras Al Khor Indsutrial Area 1", "Ras Al Khor Indsutrial Area 2",
        "Ras Al Khor Indsutrial Area 3", "Remraam", "Rigga Al Buteen", "Serena", "Springs", "The Greens", "The Lakes", "The Palm Deira",
        "The Palm Jebel Ali", "The Skycourts", "The Sustainable City", "The Villa", "Townsquare", "Um Al Sheif", "Umm Hurair 1", "Umm Hurair 2",
        "Umm Ramool", "Umm Suqeim 1", "Umm Suqeim 2", "Umm Suqeim 3", "Villanova", "Wadi Alamardi", "Warsan 1", "Warsan 2", "Waterfront",
        "Zaabeel 1", "Zaabeel 2","Al Faqa", "Al Lisaili", "Dubai Outlet Mall", "Hatta (City Fujairah)", "Lahbab (City Fujairah)", 
        "Murqquab", "Tijarah Town"
      ],
      "Abu Dhabi": [
        "Abu Dhabi Gate City", "Abu Dhabi Hills", "Abu Dhabi International Airport", "Al Adla", "Al Aman", "Al Bahia",
        "Al Bandar", "Al Dafrah", "Al Danah", "Al Etihad- Al Nahyan", "Al Falah City", "Al Forsan Village", "Al Gurum Resort",
        "Al Hosn", "Al Karamah AUH", "Al Khalidiyah", "Al Khatim", "Al Khubeirah", "Al Mafraq", "Al Manhal", "Al Maqta",
        "Al Markaziyah", "Al Markaziyah West", "Al Maryah Island", "Al Mina AUH", "Al Muneera (Al Raha)", "Al Muntazah AUH",
        "Al Musallah AUH", "Al Mushrif AUH", "Al Muzoon", "Al Nahyan", "Al Raha", "Al Raha Beach", "Al Raha Gardens",
        "Al Rahba", "Al Ras Al Akhdar", "Al Rayyana", "Al Reef", "Al Rowdah", "Al Sa'Adah", "Al Sader", "Al Safarrat",
        "Al Samha", "Al Shaleela", "Al Shamkha", "Al Shawamekh", "Al Wahdah", "Al Wathba", "Al Zaab", "Al Zafranah",
        "Al Zahraa AUH", "Al Zeina (Al Raha)", "Bani Yas East", "Bani Yas West", "BreakWater", "Capital Centre", "Ghantoot",
        "Golf Gardens", "Hydra Village (Shahama)", "ICAD", "Khor Al Bateen", "Kizad", "Madinat Al Riyad", "Madinat Khalifa - A",
        "Madinat Khalifa - B", "Madinat Khalifa - C", "Madinat Zayed", "Mahwi", "Masdar City", "Mohammed Bin Zayed City",
        "Mussafah", "New Shahama", "Old Bahya", "Port Zayed (Al Mina)", "Qasr El Bahr", "Qasr El Shatie", "Reem Island",
        "Saadiyat Island", "Sas Al Nakheel (Khalifa - A)", "Sas Al Nakhl Island", "Shahama", "Shakhbout City", "Tamouh",
        "Tourist Club Area (Al Zahiya)", "Yas Island", "Zayed Sports City","Abu Sadeen", "Al Adla", "Al Dabbiya", "Al Dhafra Western Region", "Al Fathiya", 
        "Al Ghuwaifat", "Al Hama'im", "Al Hamra AUH", "Al Harmiyyah", "Al Khatim", "Al Khis", "Al Lugain", "Al Mirayr", "Al Mirfa", "Al Nashash", "Al Nouf AUH",
        "Al Rideem", "Al Ruwais", "Al Selmiyyah", "Al Sila", "Al Sout Oasis", "Al Thuwania", "Al Yarya", "Alyhyali", "Arada", "Asab", "Barakah", 
        "Baynounah", "Beda Al Mutawa", "Beda Zayed", "Bu Hasa", "Dahin", "Eastern Mahadir", "Ge'aisa", "Ghantoot", "Ghayathi", "Giffen Town", "Habshan",
        "Hamim", "Huwaylah", "Huwita Oasis", "Jarrah", "Jeeisah", "Jereirah", "Kayya Oasis", "Kayyam", "Liwa", "Lutair", "Madinat Zayed Western Region",
        "Malqata", "Marwan Oasis", "Masdar Bin 'Usayyan", "Mawqab", "Maydar Bu Awanah", 
        "Mzeer'ah", "Nad Al Sheba Western Region", "Radoum Oasis", "Sabkhah Western Region", "Sahil", "Shah", "Taraq", "Tarif", "Thorwat Liwa", 
        "Um Al Hosn Oasis", "Umm Al Ashtan", "Wasit Oasis", "Wedhail", "Western Mahadir", "Wothain", "Yaw Al Ghadar", "Zayed City (Western Region)"
      ],
      Sharjah: [
        "Abu Shagara", "Al Abar", "Al Atain", "Al Azra", "Al Bdai'a Subrub", "Al Darari", "Al Elyash", "Al Falah Suburb",
        "Al Falaj", "Al Fayha", "Al Fisht", "Al Ghaphia", "Al Gharayen", "Al Ghubaiba SHJ", "Al Ghuwair", "Al Goaz",
        "Al Hazzanah", "Al Homaa", "Al Jazzat", "Al Jlail", "Al Jubail", "Al Juraina", "Al Khaledia Suburb", "Al Khan",
        "Al Khezamia", "Al Layyah", "Al Mahatta", "Al Majaz 1", "Al Majaz 2", "Al Majaz 3", "Al Mamzar SHJ", "Al Manakh",
        "Al Manazel", "Al Mansura", "Al Mareija", "Al Mirgab", "Al Mujarah", "Al Muntazah SHJ", "Al Musalla SHJ", "Al Nabba",
        "Al Nad", "Al Nahda", "Al Nasserya", "Al Nekhailat", "Al Noof", "Al Qadisia", "Al Qasimia", "Al Qulayaa", "Al Rahmania",
        "Al Ramaqia", "Al Ramla East", "Al Ramla West", "Al Ramtha", "Al Rifah", "Al Riqa", "Al Sabkha SHJ", "Al Saja'a Industrial Subrub",
        "Al Seef", "Al Seyouh", "Al Shahba", "Al Shuwaihen", "Al Soor", "Al Sweihat", "Al Taawun", "Al Talaa", "Al Tarfa",
        "Al Yarmook", "Barashi", "Bu Danig", "Bu Tina", "Dasman", "Halwan Suburb", "Industrial Area 1", "Industrial Area 10",
        "Industrial Area 11", "Industrial Area 12", "Industrial Area 13", "Industrial Area 15", "Industrial Area 17",
        "Industrial Area 18", "Industrial Area 2", "Industrial Area 3", "Industrial Area 4", "Industrial Area 5", "Industrial Area 6",
        "Industrial Area 7", "Industrial Area 8", "Industrial Area 9", "Maysaloon", "Muwafjah", "Muwaileh Commercial", "Muzairah",
        "Rolla", "Saif Zone", "Samnan", "Sharqan", "Um Altaraffa", "Um Fannain", "University of Sharjah", "Wasit Suburb","Al Dhaid", "Al Madam", "Maleha"
      ],
      "Al Ain": [
        "Abu Samrah", "Ain Al Fiyada", "Al Aamerah", "Al Agabiyya", "Al Ain International Airport", "Al Ain Zoo", "AL Ajban",
        "Al Ameriya", "Al Araad", "Al Basra", "Al Bateen Al Ain", "Al Dahma", "Al Dhahir", "Al Dhahra", "Al Faqa", "Al Foaa",
        "Al Hili", "Al Hiyar", "Al 'Iqabiyyah", "Al Jahili", "Al Jimi", "Al Khabisi Al Ain", "Al Khaznah", "Al Kuwaitat",
        "Al Lisaili", "Al Manasir", "Al Maqam", "Al Marakhaniya", "Al Masoudi", "Al Mnaizlah", "Al Murabaa", "Al Muraijeb",
        "Al Mutarad", "Al Mutawaa", "Al Muwaiji", "Al Nabagh", "Al Nabghah", "Al Neyadat", "Al Noud", "Al Qattara", "Al Qisees",
        "Al Quaa", "Al Ruwaydat", "Al Sad", "Al Salamat", "Al Salamat District", "Al Sallan", "Al Sarooj", "Al Shuwaib", "Al Towayya",
        "Al Waqan", "Al Yahar", "Asharej", "Bedda Bin Ammar", "Dubai Outlet Mall", "Falaj Hazzaa", "Ghireebah", "Ghonima",
        "Green Mubazzarah", "Hai Khalid", "Industrial Area", "jabal hafeet", "Khatim Al Shikla", "Malaqit", "Mezyed", "Military Zone",
        "Mondafanah", "Murqquab", "Nahil Outer", "Neima", "Oud Bin Sag Han", "Remah", "Shab Al Ashkar", "Shabhanet Ashrej",
        "Sweihan", "Tawam", "Tijarah Town", "UAE University", "Um Ghaffa", "Zakher","Abu Samrah", "AL Ajban", "Al Araad", "Al Dhahra", 
        "Al Faqa", "Al Hiyar", "Al Khatim (City Abu Dhabi)", "Al Khaznah", "Al Nabagh", "Al Nabghah", "Al Qisees", "Al Quaa", "Al Sad",
        "Al Shiwayb", "Al Shuwaib", "Al Waqan", "Al Wiqan", "Khatm Al Shiklah", "Malaqit", "Nahil Outer", "Ramlat Sweihan", "Remah", "Rimah", "Sweihan"
      ],
      Fujairah: [
        "Al Aqah", "Al Bidya", "Al Bithnah", "Al Dhaid", "Al Farfar", "Al Faseel", "Al Halah", "Al Haray", "Al Hayl", 
        "Al Ittihad", "Al Khari", "Al Madam", "Al Mahatta FUJ", "Al Manama", "Al Owaid", "Al Qurayya", "Al Taween", 
        "Albeledah", "Anajaimat", "Awhala", "Dadna", "Dibba", "Dibba Al Hisn", "Dibba Industrial Area", 
        "Fujairah Free Trade Zone", "Fujairah Intl Airport", "Fujairah Port", "Gazertalhesin", "Halefaath", "Hatta", 
        "Hay Aldoob", "Hay Algharby", "Hay Almohalb", "Hay Alseeh", "Hay Alshamali", "Industrial Area FUJ", "Kalba", 
        "Karsha", "Khor Fakkan", "Lahbab", "Love", "Madhab", "Maleha", "Masafi", "Masfut", "Merashid", "Mirbah", 
        "Munay", "Old Fujairah City", "Qidfa", "Rughaylat", "Rumailah FUJ", "Sakamkam", "Sayh Mudayrah", "Sharm", 
        "Shawka", "Suwayfah", "Zubara","Al Aqah", "Al Bidya", "Al Bithnah", "Al Dhaid", "Al Farfar", "Al Halah", "Al Khari",
        "Al Madam", "Al Manama", "Al Taween", "Albeledah", "Awhala", "Dadna", "Dibba", "Dibba Al Hisn", "Dibba Industrial Area", 
        "Gazertalhesin", "Hatta", "Halefaath", "Hay Aldoob", "Hay Algharby", "Hay Almohalb", "Hay Alseeh", "Hay Alshamali", "Karsha",
        "Lahbab", "Love", "Maleha", "Masafi", "Masfut", "Munay", "Sayh Mudayrah", "Sharm", "Shawka", "Suwayfah"
      ],
       Ajman: [
        "Ajman City Center", "Ajman Corniche", "Ajman Free Zone", "Ajman Industrial Area 1", "Ajman Industrial Area 2", 
        "Al Alia", "Al Bustan", "Al Butain", "Al Hamidiya", "Al Hamidiya 1", "Al Hamidiya 2", "Al Hamriyah Free Zone", 
        "Al Helio", "Al Heliow 1", "Al Heliow 2", "Al Jurf 1", "Al Jurf 2", "Al Jurf Industrial Area 1", 
        "Al Jurf Industrial Area 2", "Al Jurf Industrial Area 3", "Al Muntazi 1", "Al Muntazi 2", "Al Mushairef", 
        "Al Mwaihat 1", "Al Mwaihat 2", "Al Mwaihat 3", "Al Nakhil", "Al Nakhil 1", "Al Nakhil 2", "Al Nuaimia 1", 
        "Al Nuaimia 2", "Al Raqaib 1", "Al Raqaib 2", "Al Rashidiya 1", "Al Rashidiya 2", "Al Rashidiya 3", 
        "Al Rawda 1 Al Zahraa", "Al Rawda 2 Al Zahraa", "Al Rawda 3 Al Zahraa", "Al Rumailah", "Al Tallah 1", 
        "Al Tallah 2", "Al Yasmeen", "Al Zahya", "Al Zawarah", "Al Zora", "Emirates City", "Garden City", 
        "Ittihad Village","Al Manama", "Masfut", "Sayh Mudayrah"
      ],
      "Ras Al Khaimah": [
        "Adhen Village", "Al Darbijaniyah", "Al Dhait North", "Al Dhait South", "Al Duhaisah", "Al Fahlain", 
        "Al Ghail", "Al Hamra Free Zone", "Al Hamra Industrial Area", "Al Hamra Island", "Al Hamra Village", 
        "Al Hudaibah RAK", "Al Jazeerah Al Hamra", "Al Jeer", "Al Jesser Area", "Al Juwais Area", "Al Kharran", 
        "Al Mairid", "Al Marjan Island", "Al Mataf", "Al Nadiyah", "Al Nakheel", "Al Nudood", "Al Qurm", 
        "Al Qusaidat", "Al Ragibah", "Al Sall", "Al Seer", "Al Shadi", "Al Soor RAK", "Al Turfah RAK", 
        "Al Uraibi", "Al Zahra RAK", "Awafi", "Burairaat", "Dafan Al Khor", "Dafan Al Nakheel", "Dahan", 
        "Digdagga", "Ghalilah", "Habhab", "Hamrania", "Khatt", "Khuzam", "Liwa Badr", "Mamoora", "Mina Al arab", 
        "RAK City", "Rams", "Ras Al Selaab Area", "Refaah", "Seih Al Ghubb", "Seih al Harf", "Seih Al Hudaibah", 
        "Seih Al Qusaidat", "Seih Al Uraibi", "Seih Shihyar", "Sha'am", "Shamal Haqueel", "Shamal Julphar", 
        "Shareesha", "Sidroh", "Suhaim Area", "Wadi Ammar", "Wadi Shaam", "Qawasim corniche","Adhen Village", "Al Ghail", 
        "Al Jeer", "Al Khari (City Fujairah)", "Al Shadi", "Ghalilah", "Habhab", "Khatt", "Sha'am", "Shawka (City Fujairah)",
        "Wadi Shaam"
      ],
       "Umm Al Quwain": [
        "Al Aahad", "Al Abrab", "Al Dar Al Baidah", "Al Haditha", "Al Hawiyah", "Al Humrah - A", "Al Humrah - B", 
        "Al Humrah - C", "Al Humrah - D", "Al Khor", "Al Lebsa", "Al Limgadhar", "Al Maidan", "Al Nabgghah", 
        "Al Qarain", "Al Raas - A", "Al Raas - B", "Al Raas - C", "Al Rafaah (RAK)", "Al Ramlah", "Al Rashydiya", 
        "Al Raudah", "Al Riqqah", "Al Salamah - A", "Al Salamah - B", "Al Salamah - C", "Al Serra", "Al Shareiah", 
        "Biyatah", "Defence Camp", "Emirates Modern Industrial", "Falaj Al Mualla", "Falaj Al Sheikh", "Ghara", 
        "Green Belt", "Industrial Area UAQ", "Kabir", "Mohadub", "Umm Al Quwain Airport", "Umm Al Quwain Marina","Al Lebsa",
         "Al Nabgghah", "Al Rashydiya", "Al Serra", "Al Shareiah", "Biyatah", "Falaj Al Mualla", "Falaj Al Sheikh", "Ghara", 
         "Kabir", "Mohadub", "Muhathab"
      ],
     
    };

    // Areas where shipping charges may vary
    this.areasWithVariableShipping = [
      'Al Faqa', 'Abu Sadeen', 'Al Dhaid', 'Abu Samrah', 'Al Aqah', 'Al Manama', 'Adhen Village',
      'Al Lebsa', 'Al Lisaili', 'Al Adla', 'Al Madam', 'AL Ajban', 'Al Bidya', 'Masfut', 'Al Ghail',
      'Al Nabgghah', 'Dubai Outlet Mall', 'Al Dabbiya', 'Maleha', 'Al Araad', 'Al Bithnah', 'Sayh Mudayrah',
      'Al Jeer', 'Al Rashydiya', 'Hatta (City Fujairah)', 'Al Dhafra Western Region', 'Al Dhahra',
      'Al Khari (City Fujairah)', 'Al Serra', 'Lahbab (City Fujairah)', 'Al Fathiya', 'Al Faqa',
      'Al Farfar', 'Al Shadi', 'Al Shareiah', 'Murqquab', 'Al Ghuwaifat', 'Al Hiyar', 'Al Halah',
      'Ghalilah', 'Biyatah', 'Tijarah Town', 'Al Hamaim', 'Al Khatim (City Abu Dhabi)', 'Al Khari',
      'Habhab', 'Falaj Al Mualla', 'Al Hamra AUH', 'Al Khaznah', 'Al Madam', 'Khatt', 'Falaj Al Sheikh',
      'Al Harmiyyah', 'Al Nabagh', 'Al Manama', 'Shaam', 'Ghara', 'Al Khatim', 'Al Nabghah', 'Al Taween',
      'Shawka (City Fujairah)', 'Kabir', 'Al Khis', 'Al Qisees', 'Albeledah', 'Wadi Shaam', 'Mohadub',
      'Al Lugain', 'Al Quaa', 'Awhala', 'Muhathab', 'Al Mirayr', 'Al Sad', 'Dadna', 'Al Mirfa',
      'Al Shiwayb', 'Dibba', 'Al Nashash', 'Al Shuwaib', 'Dibba Al Hisn', 'Al Nouf AUH', 'Al Waqan',
      'Dibba Industrial Area', 'Al Rideem', 'Al Wiqan', 'Gazertalhesin', 'Al Ruwais', 'Khatm Al Shiklah',
      'Hatta', 'Al Selmiyyah', 'Malaqit', 'Halefaath', 'Al Sila', 'Nahil Outer', 'Hay Aldoob', 'Al Sout Oasis',
      'Ramlat Sweihan', 'Hay Algharby', 'Al Thuwania', 'Remah', 'Hay Almohalb', 'Al Yarya', 'Rimah',
      'Hay Alseeh', 'Alyhyali', 'Sweihan', 'Hay Alshamali', 'Arada', 'Karsha', 'Asab', 'Lahbab', 'Barakah',
      'Love', 'Baynounah', 'Maleha', 'Beda Al Mutawa', 'Masafi', 'Beda Zayed', 'Masfut', 'Bu Hasa', 'Munay',
      'Dahin', 'Sayh Mudayrah', 'Eastern Mahadir', 'Sharm', 'Ge aisa', 'Shawka', 'Ghantoot', 'Suwayfah',
      'Ghayathi', 'Giffen Town', 'Habshan', 'Hamim', 'Huwaylah', 'Huwita Oasis', 'Jarrah', 'Jeeisah',
      'Jereirah', 'Kayya Oasis', 'Kayyam', 'Liwa', 'Lutair', 'Madinat Zayed Western Region', 'Malqata',
      'Marwan Oasis', 'Masdar Bin Usayyan', 'Mawqab', 'Maydar Bu Awanah', 'Mzeer ah', 'Nad Al Sheba Western Region',
      'Radoum Oasis', 'Sabkhah Western Region', 'Sahil', 'Shah', 'Taraq', 'Tarif', 'Thorwat Liwa', 'Um Al Hosn Oasis',
      'Umm Al Ashtan', 'Wasit Oasis', 'Wedhail', 'Western Mahadir', 'Wothain', 'Yaw Al Ghadar', 'Zayed City (Western Region)'
    ];
  }

  connectedCallback() {
    this.populateCityDropdown();

    // Attach event listeners for city and area changes
    this.querySelector("#cityDropdown").addEventListener("change", (e) => {
      this.handleCityChange(e);
    });

    this.querySelector("#areaDropdown").addEventListener("change", (e) => {
      this.handleAreaChange(e);
    });

    // Event listener for the checkout button click
    const checkoutButton =
      document.querySelector("button.cart__checkout-button.button") ||
      document.querySelector('.mini-cart__footer button[name="checkout"]');
    
    if (checkoutButton) {
      checkoutButton.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const area = this.querySelector("#areaDropdown").value;
        const city = this.querySelector("#cityDropdown").value;

        if (area && city) {
          this.autoSelectEmirateAndRedirect(city, area);
        } else {
          this.querySelector("#areaDropdownErrorText").style.display = "block";
          this.querySelector("#cityDropdownErrorText").style.display = "block";
        }
      });
    }
  }

  // Populate the city dropdown
  populateCityDropdown() {
    const cityDropdown = this.querySelector("#cityDropdown");
    cityDropdown.innerHTML = '<option value="" disabled selected>Select City</option>';

    for (let city in this.cityAreaList) {
      let option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      cityDropdown.appendChild(option);
    }
  }

  // Populate area dropdown based on the selected city
  populateAreaDropdown(city) {
    const areaDropdown = this.querySelector("#areaDropdown");
    areaDropdown.innerHTML = '<option value="" disabled selected>Select Area</option>';

    if (city && this.cityAreaList[city]) {
      this.cityAreaList[city].forEach((area) => {
        let option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        areaDropdown.appendChild(option);
      });
      this.querySelector(".areaList-Wrap").style.display = "block";
    } else {
      this.querySelector(".areaList-Wrap").style.display = "none";
    }
  }

  // Handle city change event
  handleCityChange(e) {
    const selectedCity = e.target.value;
    this.populateAreaDropdown(selectedCity);
    this.updateEmirateDropdown(selectedCity);
    this.hideErrors();
  }

  // Handle area change event
  handleAreaChange(e) {
    const selectedArea = e.target.value;

    // Check if the selected area is in the array for variable shipping
    if (this.areasWithVariableShipping.includes(selectedArea)) {
      this.showShippingWarning();
    } else {
      this.hideShippingWarning();
    }

    this.hideErrors();
  }

  // Show shipping warning
  showShippingWarning() {
    const warningElement = this.querySelector("#shippingWarning");
    if (warningElement) {
      warningElement.style.display = "block";
    }
  }

  // Hide shipping warning
  hideShippingWarning() {
    const warningElement = this.querySelector("#shippingWarning");
    if (warningElement) {
      warningElement.style.display = "none";
    }
  }

  // Hide error messages
  hideErrors() {
    this.querySelector("#areaDropdownErrorText").style.display = "none";
    this.querySelector("#cityDropdownErrorText").style.display = "none";
  }

  // Update Emirate dropdown based on the selected city
  updateEmirateDropdown(city) {
    const emirateDropdown = this.querySelector("#Select1");
    const emirateValue = this.cityToEmirateMapping[city];
    if (emirateDropdown && emirateValue) {
      emirateDropdown.value = emirateValue;

      // Trigger the change event
      const event = new Event("change", { bubbles: true });
      emirateDropdown.dispatchEvent(event);
    }
  }

  // Auto-select the Emirate and redirect to checkout
  autoSelectEmirateAndRedirect(city, area) {
    this.updateEmirateDropdown(city);
    
    // Build checkout URL
    const checkoutUrl = `/checkout?locale=en&checkout[shipping_address][zone]=${encodeURIComponent(
      this.cityToEmirateMapping[city]
    )}&checkout[shipping_address][city]=${encodeURIComponent(area)}`;
    
    window.location.href = checkoutUrl;
  }
}

// Define the custom element
customElements.define('city-selection', CitySelection);
