import marvelPoster from '../assets/marvel.jpg';
import aquamanPoster from '../assets/aquaman.jpg';
import dunePoster from '../assets/dune2.jpg';
import oppenheimerPoster from '../assets/oppenheimer.jpg';
import batmanPoster from '../assets/the-batman.jpg';

export const universalMovies = [
    // ACTION / ADVENTURE / SCI-FI
    {
        id: 1,
        title: 'The Marvels',
        rating: '8.7/10',
        genre: 'Action, Adventure',
        description: 'Carol Danvers Gets Her Powers Entangled With Those Of Kamala Khan and Forcing Them To Work Together To Save The Universe.',
        image: marvelPoster,
        duration: '1h 45m',
        year: 2023,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/wS_qbDztgVY'
    },
    {
        id: 2,
        title: 'Aquaman and the Lost Kingdom',
        rating: '7.8/10',
        genre: 'Action, Fantasy',
        description: 'Black Manta seeks revenge on Aquaman for his father\'s death. Wielding the Black Trident power, he becomes a formidable foe.',
        image: aquamanPoster,
        duration: '2h 04m',
        year: 2023,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/UVpx2v51t8s'
    },
    {
        id: 3,
        title: 'Dune: Part Two',
        rating: '8.5/10',
        genre: 'Sci-Fi, Adventure',
        description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
        image: dunePoster,
        duration: '2h 46m',
        year: 2024,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/Way9Dexny3w'
    },
    {
        id: 4,
        title: 'Oppenheimer',
        rating: '8.8/10',
        genre: 'Biography, Drama',
        description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
        image: oppenheimerPoster,
        duration: '3h 00m',
        year: 2023,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/uYPbbksJxIg'
    },
    {
        id: 5,
        title: 'The Batman',
        rating: '8.2/10',
        genre: 'Action, Crime',
        description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.',
        image: batmanPoster,
        duration: '2h 56m',
        year: 2022,
        trailerUrl: 'https://www.youtube.com/embed/mqqft2x_Aa4'
    },
    {
        id: 6,
        title: 'Interstellar',
        rating: '8.6/10',
        genre: 'Sci-Fi, Adventure',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        duration: '2h 49m',
        year: 2014,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E'
    },
    {
        id: 7,
        title: 'Avatar: The Way of Water',
        rating: '7.9/10',
        genre: 'Sci-Fi, Action',
        description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        duration: '3h 12m',
        year: 2022,
        trailerUrl: 'https://www.youtube.com/embed/d9MyW72ELq0'
    },
    {
        id: 8,
        title: 'The Dark Knight Rises',
        rating: '9.0/10',
        genre: 'Action, Thriller',
        description: 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/y2DB71C4nyIdMrANijz8mzvQtk6.jpg',
        duration: '2h 44m',
        year: 2012,
        trailerUrl: 'https://www.youtube.com/embed/GokKUqLcvD8'
    },
    {
        id: 9,
        title: 'Ant-Man and the Wasp: Quantumania',
        rating: '8.1/10',
        genre: 'Action, Adventure',
        description: 'Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/cFQEO687n1K6umXbInzocxcnAQz.jpg',
        duration: '2h 04m',
        year: 2023,
        trailerUrl: 'https://www.youtube.com/embed/ZlNFpri-Y40'
    },
    {
        id: 10,
        title: 'Heart of Stone',
        rating: '9.0/10',
        genre: 'Action, Thriller',
        description: 'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg',
        duration: '2h 02m',
        year: 2023,
        trailerUrl: 'https://www.youtube.com/embed/xUJWxHuUp7k'
    },

    // ANIMATION
    {
        id: 11,
        title: 'Kung Fu Panda 3',
        rating: '8.3/10',
        genre: 'Animation, Action',
        description: 'Continuing his "legendary adventures of awesomeness", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/oajNi4Su39WAByHI6EONu8G8HYn.jpg',
        duration: '1h 35m',
        year: 2016,
        trailerUrl: 'https://www.youtube.com/embed/GhRJkPV63FQ'
    },
    {
        id: 12,
        title: 'Spider-Man: Across the Spider-Verse',
        rating: '8.4/10',
        genre: 'Animation, Action',
        description: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        duration: '2h 20m',
        year: 2023,
        isTrending: true,
        trailerUrl: 'https://www.youtube.com/embed/shW9i6k8cB0'
    },
    {
        id: 13,
        title: 'Coco',
        rating: '8.4/10',
        genre: 'Animation, Family',
        description: 'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
        duration: '1h 45m',
        year: 2017,
        trailerUrl: 'https://www.youtube.com/embed/Ga6RYejo6Hk'
    },
    {
        id: 14,
        title: 'The Lion King',
        rating: '8.5/10',
        genre: 'Animation, Drama',
        description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
        duration: '1h 28m',
        year: 1994,
        trailerUrl: 'https://www.youtube.com/embed/4CbLXeGSDxg'
    },
    {
        id: 15,
        title: 'WALL·E',
        rating: '8.4/10',
        genre: 'Animation, Adventure',
        description: 'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/fK5ssgvtI43z19FoWigdlqgpLRE.jpg',
        duration: '1h 38m',
        year: 2008,
        trailerUrl: 'https://www.youtube.com/embed/alIq_wG9FNk'
    },
    {
        id: 16,
        title: 'Puss in Boots: The Last Wish',
        rating: '8.3/10',
        genre: 'Animation, Comedy',
        description: 'Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg',
        duration: '1h 42m',
        year: 2022,
        trailerUrl: 'https://www.youtube.com/embed/tHb7WlgyaUc'
    },
    {
        id: 17,
        title: 'Zootopia',
        rating: '8.0/10',
        genre: 'Animation, Comedy',
        description: 'In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/9tOkjBEiiGcaClgJFtwocStZvIT.jpg',
        duration: '1h 48m',
        year: 2016,
        trailerUrl: 'https://www.youtube.com/embed/jWM0ct-OLsM'
    },
    {
        id: 18,
        title: 'Moana',
        rating: '7.6/10',
        genre: 'Animation, Adventure',
        description: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana\'s island, she answers the Ocean\'s call to seek out the Demigod to set things right.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/iYLKMV7PIBtFmtygRrhSiyzcVsF.jpg',
        duration: '1h 47m',
        year: 2016,
        trailerUrl: 'https://www.youtube.com/embed/LKFuXETZUsI'
    },
    {
        id: 19,
        title: 'Inside Out',
        rating: '8.1/10',
        genre: 'Animation, Comedy',
        description: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/jJKZaTBNenlFclQyjrnvzkRmvWE.jpg',
        duration: '1h 35m',
        year: 2015,
        trailerUrl: 'https://www.youtube.com/embed/seMwpP0yeu4'
    },
    {
        id: 20,
        title: 'Up',
        rating: '8.3/10',
        genre: 'Animation, Adventure',
        description: '78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg',
        duration: '1h 36m',
        year: 2009,
        trailerUrl: 'https://www.youtube.com/embed/ORFWdXl_zJ4'
    },

    // THRILLER / DRAMA / CRIME
    {
        id: 21,
        title: 'Parasite',
        rating: '8.5/10',
        genre: 'Thriller, Comedy',
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        duration: '2h 12m',
        year: 2019,
        trailerUrl: 'https://www.youtube.com/embed/5xH0HfJHsaY'
    },
    {
        id: 22,
        title: 'Joker',
        rating: '8.4/10',
        genre: 'Crime, Drama',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        duration: '2h 02m',
        year: 2019,
        trailerUrl: 'https://www.youtube.com/embed/zAGVQLHvwOY'
    },
    {
        id: 23,
        title: 'The Departed',
        rating: '8.5/10',
        genre: 'Thriller, Crime',
        description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
        duration: '2h 31m',
        year: 2006,
        trailerUrl: 'https://www.youtube.com/embed/SGWvwjZ0eDc'
    },
    {
        id: 24,
        title: 'The Prestige',
        rating: '8.5/10',
        genre: 'Drama, Mystery',
        description: 'After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg',
        duration: '2h 10m',
        year: 2006,
        trailerUrl: 'https://www.youtube.com/embed/ELq7V8vkekI'
    },
    {
        id: 25,
        title: 'Whiplash',
        rating: '8.5/10',
        genre: 'Drama, Music',
        description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
        duration: '1h 46m',
        year: 2014,
        trailerUrl: 'https://www.youtube.com/embed/7d_jQycdQGo'
    },
    {
        id: 26,
        title: 'The Wolf of Wall Street',
        rating: '8.2/10',
        genre: 'Biography, Comedy',
        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg',
        duration: '3h 00m',
        year: 2013,
        trailerUrl: 'https://www.youtube.com/embed/iszwuX1AK6A'
    },
    {
        id: 27,
        title: 'Django Unchained',
        rating: '8.5/10',
        genre: 'Western, Drama',
        description: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/5Lbm0gpFDRAPIV1Cth6ln9iL1ou.jpg',
        duration: '2h 45m',
        year: 2012,
        trailerUrl: 'https://www.youtube.com/embed/_-sGKVbPW04'
    },
    {
        id: 28,
        title: 'Fight Club',
        rating: '8.8/10',
        genre: 'Drama',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        duration: '2h 19m',
        year: 1999,
        trailerUrl: 'https://www.youtube.com/embed/BdJKm16Co6M'
    },
    {
        id: 29,
        title: 'Pulp Fiction',
        rating: '8.9/10',
        genre: 'Crime, Drama',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        duration: '2h 34m',
        year: 1994,
        trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY'
    },
    {
        id: 30,
        title: 'Gladiator',
        rating: '8.5/10',
        genre: 'Action, Adventure',
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
        duration: '2h 35m',
        year: 2000,
        trailerUrl: 'https://www.youtube.com/embed/owK1qxDselE'
    },

    // OLDER CLASSICS
    {
        id: 31,
        title: 'The Godfather',
        rating: '9.2/10',
        genre: 'Crime, Drama',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        duration: '2h 55m',
        year: 1972,
        trailerUrl: 'https://www.youtube.com/embed/UaVTIH8mujA'
    },
    {
        id: 32,
        title: 'The Shawshank Redemption',
        rating: '9.3/10',
        genre: 'Drama',
        description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        duration: '2h 22m',
        year: 1994,
        trailerUrl: 'https://www.youtube.com/embed/6hB3S9bIaco'
    },
    {
        id: 33,
        title: 'Schindler\'s List',
        rating: '9.0/10',
        genre: 'Biography, Drama',
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
        duration: '3h 15m',
        year: 1993,
        trailerUrl: 'https://www.youtube.com/embed/gG22XNhtnoY'
    },
    {
        id: 34,
        title: 'Forrest Gump',
        rating: '8.8/10',
        genre: 'Drama, Romance',
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg',
        duration: '2h 22m',
        year: 1994,
        trailerUrl: 'https://www.youtube.com/embed/bLvqoHBptjg'
    },
    {
        id: 35,
        title: 'The Matrix',
        rating: '8.7/10',
        genre: 'Sci-Fi, Action',
        description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        duration: '2h 16m',
        year: 1999,
        trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8'
    },

    // MORE ACTION & SCI-FI
    {
        id: 36,
        title: 'Avengers: Endgame',
        rating: '8.4/10',
        genre: 'Action, Sci-Fi',
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
        duration: '3h 01m',
        year: 2019,
        trailerUrl: 'https://www.youtube.com/embed/TcMBFSGVi1c'
    },
    {
        id: 37,
        title: 'Blade Runner 2049',
        rating: '8.0/10',
        genre: 'Sci-Fi, Drama',
        description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
        duration: '2h 44m',
        year: 2017,
        trailerUrl: 'https://www.youtube.com/embed/gCcx85zbxz4'
    },
    {
        id: 38,
        title: 'Mad Max: Fury Road',
        rating: '8.1/10',
        genre: 'Action, Adventure',
        description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
        duration: '2h 00m',
        year: 2015,
        trailerUrl: 'https://www.youtube.com/embed/hEJnMQG9ev8'
    },
    {
        id: 39,
        title: 'Top Gun: Maverick',
        rating: '8.3/10',
        genre: 'Action, Drama',
        description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN\'s elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
        duration: '2h 10m',
        year: 2022,
        trailerUrl: 'https://www.youtube.com/embed/qSqVVswa420'
    },
    {
        id: 40,
        title: 'Black Panther: Wakanda Forever',
        rating: '7.2/10',
        genre: 'Action, Adventure',
        description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T\'Challa.',
        image: 'https://media.themoviedb.org/t/p/w440_and_h660_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
        duration: '2h 41m',
        year: 2022,
        trailerUrl: 'https://www.youtube.com/embed/_Z3QKkl1WyM'
    },

    // MIXED GENRES FOR VARIETY
    {
        id: 41,
        title: 'Get Out',
        rating: '7.7/10',
        genre: 'Horror, Mystery',
        description: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg',
        duration: '1h 44m',
        year: 2017,
        trailerUrl: 'https://www.youtube.com/embed/DzfpyUB60YY'
    },
    {
        id: 42,
        title: 'Knives Out',
        rating: '7.9/10',
        genre: 'Comedy, Crime',
        description: 'A detective investigates the death of a patriarch of an eccentric, combative family.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg',
        duration: '2h 10m',
        year: 2019,
        trailerUrl: 'https://www.youtube.com/embed/qGqiHJTsRkQ'
    },
    {
        id: 43,
        title: 'La La Land',
        rating: '8.0/10',
        genre: 'Comedy, Drama',
        description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/nlPCdZlHtRNcF6C9hzUH4ebmV1w.jpg',
        duration: '2h 08m',
        year: 2016,
        trailerUrl: 'https://www.youtube.com/embed/0pdqf4P9MB8'
    },
    {
        id: 44,
        title: 'Green Book',
        rating: '8.2/10',
        genre: 'Biography, Comedy',
        description: 'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg',
        duration: '2h 10m',
        year: 2018,
        trailerUrl: 'https://www.youtube.com/embed/QkZxoko_HC0'
    },
    {
        id: 45,
        title: 'Bohemian Rhapsody',
        rating: '8.0/10',
        genre: 'Biography, Music',
        description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg',
        duration: '2h 14m',
        year: 2018,
        trailerUrl: 'https://www.youtube.com/embed/mP0VHJYFOAU'
    },
    {
        id: 46,
        title: 'Guardians of the Galaxy',
        rating: '8.0/10',
        genre: 'Action, Adventure',
        description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        duration: '2h 01m',
        year: 2014,
        trailerUrl: 'https://www.youtube.com/embed/d96cjJhvlMA'
    },
    {
        id: 47,
        title: 'Thor: Ragnarok',
        rating: '7.9/10',
        genre: 'Action, Comedy',
        description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
        duration: '2h 10m',
        year: 2017,
        trailerUrl: 'https://www.youtube.com/embed/v7MGUNV8MxU'
    },
    {
        id: 48,
        title: 'Iron Man',
        rating: '7.9/10',
        genre: 'Action, Sci-Fi',
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        image: 'https://media.themoviedb.org/t/p/w600_and_h900_face/78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
        duration: '2h 06m',
        year: 2008,
        trailerUrl: 'https://www.youtube.com/embed/8ugaeA-nMTc'
    },
    {
        id: 49,
        title: 'Logan',
        rating: '8.1/10',
        genre: 'Action, Drama',
        description: 'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/2aQyMFEtppL6dNK384l5qhGSn5G.jpg',
        duration: '2h 17m',
        year: 2017,
        trailerUrl: 'https://www.youtube.com/embed/Div0iP65aZo'
    },
    {
        id: 50,
        title: 'Deadpool',
        rating: '8.0/10',
        genre: 'Action, Comedy',
        description: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
        image: 'https://media.themoviedb.org/t/p/w1066_and_h600_face/en971MEXui9diirXlogOrPKmsEn.jpg',
        duration: '1h 48m',
        year: 2016,
        trailerUrl: 'https://www.youtube.com/embed/Xithigfg7dA'
    }
];
