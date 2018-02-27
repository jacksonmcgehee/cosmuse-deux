# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ah_bam = User.create!(
    email: 'ah_bam@yucatan.com',
    user_name: 'Ah Bam',
    profile_pic: 'https://i.imgur.com/xW2lhdS.jpg'
)

rudaki = User.create!(
    email: 'rudaki@samanid.com',
    user_name: 'Rudaki',
    profile_pic: 'https://i.imgur.com/L5mvYIG.jpg'
)

choe_chiwon = User.create!(
    email: 'choe_chiwon@gyeongju.com',
    user_name: 'Choe Chiwon',
    profile_pic: 'https://i.imgur.com/7RzVkYb.jpg'
)

christopher_okigbo = User.create!(
    email: 'christopher_okigbo@biafra.com',
    user_name: 'Christopher Okigbo',
    profile_pic: 'https://i.imgur.com/ZBNFXnU.jpg'
)

ah_bam.posts.create!(
    title: 'Flower Song',
    body: 'The most alluring moon
    has risen over the forest;
    it is going to burn
    suspended in the center
    of the sky to lighten
    all the earth, all the woods,
    shining its light on all.
    Sweetly comes the air and the perfume.
    Happiness permeates all good men.
     
    We have arrived inside the woods
    where no one will see what we have
    come here to do.
     
    We have brought plumeria flowers,
    chucum blossoms, dog jasmines;
    we have the copal,
    the low cane vine,
    the land tortoise shell,
    new quartz, chalk and cotton thread;
    the new chocolate cup,
    the large fine flint,
    the new weight,
    the new needle work,
    gifts of turkeys, new leather,
    all new, even our hair bands,
    they touch us with nectar
    of the roaring conch shell
    of the ancients.
     
    Already, already
    we are in the heart of the woods,
    at the edge of the pool in the stone
    to await the rising
    of the lovely smoking star
    over the forest.
    Take off your clothes,
    let down your hair,
    become as you were
    when you arrived here on earth,
    virgins, maidens.',
    picture: 'https://images-assets.nasa.gov/image/PIA14443/PIA14443~orig.jpg'
)

rudaki.posts.create!(
    title: 'The Blind Man Sees',
    body: 'I saw a bird near the city of Sarakhs
    It had raised its song to the clouds
    I saw a colorful chador on it
    So many colors on its chador',
    picture: 'https://images-assets.nasa.gov/image/PIA13447/PIA13447~orig.jpg'
)

choe_chiwon.posts.create!(
    title: 'ten years of dust',
    body: "Who is there within China to sympathize with him without?
    I ask for the ferry that will take me across the river,
    Originally I sought only food and salary, not the benefits of office,
    Only my parents’ glory, not my own needs.
    The traveler's road, rain falling upon the river;
    My former home, dreaming of return, springtime beneath the sun.
    Crossing the river I meet with fortune the broad waves.
    I wash ten years of dust from my humble cap strings.",
    picture: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001662/GSFC_20171208_Archive_e001662~orig.jpg'
)

christopher_okigbo.posts.create!(
    title: 'Dance of the Painted Maidens',
    body: 'Bright 
    with the armpit dazzle of a lioness, 
    she answers, 
    wearing white light about her; 
    and the waves escort her, 
    my lioness, 
    crowned with moonlight. ',
    picture: 'https://images-assets.nasa.gov/image/A Galactic Spectacle_4862916839_o/A Galactic Spectacle_4862916839_o~orig.jpg'
)