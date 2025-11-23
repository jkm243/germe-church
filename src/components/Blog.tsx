import React, { useState } from 'react';
import { Calendar, User, Search, ArrowRight } from 'lucide-react';
import BlogArticle from './BlogArticle';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'enseignement', name: 'Enseignement' },
    { id: 'meditation', name: 'Méditation' }
  ];

  const articles = [
    {
      id: 1,
      title: "La Patience dans l'Épreuve",
      category: "enseignement",
      author: "Frère Paul André",
      date: "12 Décembre 2024",
      readTime: "8 min de lecture",
      excerpt: "Comment maintenir notre foi et notre espérance lorsque nous traversons des moments difficiles ?",
      imageUrl: "https://images.pexels.com/photos/8466665/pexels-photo-8466665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      featured: true,
      content: [
        { type: 'paragraph', text: "L'épreuve fait partie intégrante du parcours de tout croyant. Elle est ce creuset dans lequel notre foi est testée, purifiée et fortifiée. Comme l'or dans le feu, nous sortons de l'épreuve plus purs et plus brillants qu'avant." },
        { type: 'scripture', text: "Mes frères, regardez comme un sujet de joie complète les diverses épreuves auxquelles vous pouvez être exposés, sachant que l'épreuve de votre foi produit la patience.", reference: "Jacques 1:2-3" },
        { type: 'heading', text: "La Nature de l'Épreuve" },
        { type: 'paragraph', text: "L'épreuve n'est pas un châtiment de Dieu, mais plutôt un instrument de sa grâce. Elle révèle ce qui est caché dans nos cœurs et nous permet de grandir dans notre foi. Dieu permet l'épreuve non pour nous détruire, mais pour nous construire et nous fortifier." },
        { type: 'paragraph', text: "Lorsque nous traversons des moments difficiles, nous découvrons des ressources spirituelles que nous ne soupçonnions pas. La prière devient plus fervente, la Parole plus précieuse, et la communion fraternelle plus nécessaire." },
        { type: 'heading', text: "Maintenir la Foi dans l'Épreuve" },
        { type: 'paragraph', text: "La clé pour traverser l'épreuve avec victoire est de garder nos yeux fixés sur Christ. Il est notre rocher, notre forteresse, notre refuge dans la tempête. Quand tout autour de nous semble s'effondrer, Il demeure notre ancre solide et inébranlable." },
        { type: 'quote', text: "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces." },
        { type: 'scripture', text: "Ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; Ils courent, et ne se lassent point, Ils marchent, et ne se fatiguent point.", reference: "Ésaïe 40:31" },
        { type: 'heading', text: "Le Fruit de l'Épreuve" },
        { type: 'paragraph', text: "Au terme de l'épreuve, nous réalisons que Dieu était présent à chaque instant. L'épreuve produit en nous un caractère affermi, une foi plus profonde, et une compassion plus grande envers ceux qui souffrent. Elle nous prépare aussi à être des instruments de consolation pour d'autres." },
        { type: 'paragraph', text: "Ne désespérons donc pas dans l'épreuve, mais regardons à Celui qui a souffert pour nous. Il comprend nos douleurs, Il connaît nos larmes, et Il promet de nous porter jusqu'à la victoire." }
      ]
    },
    {
      id: 2,
      title: "Témoignage : Guérison Miraculeuse",
      category: "meditation",
      author: "Sœur Marie-Claire",
      date: "8 Décembre 2024",
      readTime: "6 min de lecture",
      excerpt: "Le témoignage poignant d'une sœur qui a vécu la puissance de Dieu dans sa maladie.",
      imageUrl: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      content: [
        { type: 'paragraph', text: "C'était en janvier 2023 lorsque j'ai reçu le diagnostic qui allait bouleverser ma vie : une maladie grave que les médecins jugeaient incurable. Les mots du docteur résonnaient encore dans mes oreilles : 'Il n'y a plus rien que nous puissions faire'." },
        { type: 'paragraph', text: "Mais ce que les hommes déclarent impossible, Dieu le rend possible. Dans les moments les plus sombres de ma maladie, j'ai découvert une intimité avec Dieu que je n'avais jamais connue auparavant. Chaque jour était un combat, mais aussi une opportunité de voir la fidélité de Dieu se manifester." },
        { type: 'scripture', text: "Je suis l'Éternel, qui te guérit.", reference: "Exode 15:26" },
        { type: 'heading', text: "La Prière de la Foi" },
        { type: 'paragraph', text: "L'assemblée s'est mobilisée dans la prière. Nos frères et sœurs ont jeûné, prié, intercédé sans relâche. Le frère Paul André est venu prier pour moi, et cette nuit-là, j'ai senti la présence de Dieu d'une manière tangible, comme un feu purificateur qui traversait mon corps." },
        { type: 'quote', text: "La prière de la foi sauvera le malade, et le Seigneur le relèvera; et s'il a commis des péchés, il lui sera pardonné." },
        { type: 'paragraph', text: "Les jours qui ont suivi ont été marqués par des changements progressifs mais indéniables. Mon état s'améliorait de manière inexplicable pour les médecins. Les analyses montraient une régression de la maladie que la science ne pouvait expliquer." },
        { type: 'heading', text: "La Gloire à Dieu Seul" },
        { type: 'paragraph', text: "Aujourd'hui, je suis complètement guérie. Les médecins parlent de rémission spontanée, mais moi je sais que c'est la main de Dieu qui m'a touchée. Cette épreuve m'a appris que notre Dieu est toujours le même : celui qui guérit, qui restaure, qui fait des miracles." },
        { type: 'scripture', text: "Bénis l'Éternel, mon âme, Et n'oublie aucun de ses bienfaits! C'est lui qui pardonne toutes tes iniquités, Qui guérit toutes tes maladies.", reference: "Psaume 103:2-3" },
        { type: 'paragraph', text: "Mon témoignage est là pour encourager tous ceux qui traversent l'épreuve de la maladie : ne perdez jamais espoir. Dieu est fidèle, et sa puissance ne connaît aucune limite. Continuez à croire, continuez à prier, car notre Dieu fait encore des miracles aujourd'hui." }
      ]
    },
    {
      id: 3,
      title: "Méditation sur Psaume 23",
      category: "meditation",
      author: "Frère Paul André",
      date: "5 Décembre 2024",
      readTime: "10 min de lecture",
      excerpt: "Une méditation profonde sur ce psaume bien-aimé qui nous révèle Dieu comme notre berger.",
      imageUrl: "https://images.pexels.com/photos/8815110/pexels-photo-8815110.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      content: [
        { type: 'scripture', text: "L'Éternel est mon berger: je ne manquerai de rien. Il me fait reposer dans de verts pâturages, Il me dirige près des eaux paisibles. Il restaure mon âme, Il me conduit dans les sentiers de la justice, À cause de son nom.", reference: "Psaume 23:1-3" },
        { type: 'paragraph', text: "Le Psaume 23 est sans doute l'un des textes les plus connus et les plus aimés de toute l'Écriture. En quelques versets, David nous peint un portrait magnifique de la relation entre Dieu et son peuple, utilisant l'image du berger et de ses brebis." },
        { type: 'heading', text: "Le Berger Pourvoit" },
        { type: 'paragraph', text: "'L'Éternel est mon berger: je ne manquerai de rien.' Ces mots résonnent comme une déclaration de foi absolue. David ne dit pas que Dieu pourrait être son berger, ou qu'il espère que Dieu le sera - il affirme avec assurance : 'L'Éternel EST mon berger'. Cette relation est établie, certaine, inébranlable." },
        { type: 'paragraph', text: "Un bon berger connaît intimement chacune de ses brebis. Il connaît leurs besoins, leurs faiblesses, leurs habitudes. De même, notre Berger céleste nous connaît parfaitement. Il sait ce dont nous avons besoin avant même que nous le demandions." },
        { type: 'heading', text: "Le Berger Restaure" },
        { type: 'quote', text: "Il restaure mon âme. Quelle promesse merveilleuse! Notre Berger ne se contente pas de pourvoir à nos besoins physiques, il prend soin de notre âme, de notre être intérieur." },
        { type: 'paragraph', text: "Dans un monde qui nous épuise et nous blesse, nous avons besoin d'un lieu de restauration. Le Seigneur nous offre ce lieu dans sa présence. C'est là, près des eaux paisibles, que notre âme fatiguée trouve le repos et la régénération." },
        { type: 'scripture', text: "Quand je marche dans la vallée de l'ombre de la mort, Je ne crains aucun mal, car tu es avec moi: Ta houlette et ton bâton me rassurent.", reference: "Psaume 23:4" },
        { type: 'heading', text: "Le Berger Protège" },
        { type: 'paragraph', text: "La vie comporte des vallées sombres. Personne n'y échappe. Mais remarquez que David ne dit pas 'SI je marche dans la vallée', mais 'QUAND je marche dans la vallée'. Il sait que les épreuves viendront, mais il sait aussi que le Berger sera là." },
        { type: 'paragraph', text: "La présence du Berger transforme la vallée de l'ombre de la mort. Ce qui pourrait être un lieu de terreur devient un lieu de confiance. Non pas parce que le danger n'est pas réel, mais parce que la présence du Berger est plus réelle encore." },
        { type: 'heading', text: "Conclusion" },
        { type: 'paragraph', text: "Le Psaume 23 se termine par une déclaration triomphante : 'Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie, et j'habiterai dans la maison de l'Éternel jusqu'à la fin de mes jours.' C'est la confession d'une âme qui a trouvé son repos en Dieu." },
        { type: 'paragraph', text: "Puissions-nous tous connaître intimement notre Berger, lui faire confiance dans les vallées, et nous réjouir dans la certitude de sa présence éternelle." }
      ]
    },
    {
      id: 4,
      title: "L'Importance de la Sanctification",
      category: "enseignement",
      author: "Frère Paul André",
      date: "28 Novembre 2024",
      readTime: "12 min de lecture",
      excerpt: "Un enseignement approfondi sur l'appel à la sainteté et comment vivre une vie consacrée.",
      imageUrl: "https://images.pexels.com/photos/8815189/pexels-photo-8815189.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      content: [
        { type: 'scripture', text: "Vous serez saints, car je suis saint.", reference: "1 Pierre 1:16" },
        { type: 'paragraph', text: "La sanctification est un thème central de l'Écriture, et pourtant c'est l'un des aspects de la vie chrétienne les plus mal compris aujourd'hui. Beaucoup réduisent la sanctification à une simple liste de choses à faire ou à ne pas faire, alors qu'elle est en réalité un processus profond de transformation à l'image de Christ." },
        { type: 'heading', text: "Qu'est-ce que la Sanctification?" },
        { type: 'paragraph', text: "Le mot 'sanctification' vient du latin 'sanctus' qui signifie 'saint' ou 'mis à part'. Être sanctifié, c'est être mis à part pour Dieu, séparé du monde et de ses convoitises pour appartenir entièrement au Seigneur." },
        { type: 'paragraph', text: "La sanctification comporte deux aspects : la sanctification positionnelle et la sanctification progressive. La première est instantanée - au moment de notre conversion, nous sommes mis à part pour Dieu. La seconde est un processus continu qui dure toute notre vie terrestre." },
        { type: 'heading', text: "Le Fondement de la Sanctification" },
        { type: 'scripture', text: "Ce que Dieu veut, c'est votre sanctification; c'est que vous vous absteniez de l'impudicité.", reference: "1 Thessaloniciens 4:3" },
        { type: 'paragraph', text: "La sanctification n'est pas optionnelle pour le chrétien. C'est la volonté explicite de Dieu pour notre vie. Sans la sanctification, nul ne verra le Seigneur (Hébreux 12:14). Ce n'est donc pas une suggestion, mais un commandement divin." },
        { type: 'quote', text: "La sanctification n'est pas un effort humain pour atteindre la perfection, mais une coopération avec l'œuvre de l'Esprit Saint en nous." },
        { type: 'heading', text: "Comment Vivre une Vie Sanctifiée?" },
        { type: 'paragraph', text: "Premièrement, la sanctification commence par une séparation du péché. Nous ne pouvons servir deux maîtres. Nous devons faire un choix délibéré de renoncer au péché et de nous tourner vers Dieu." },
        { type: 'paragraph', text: "Deuxièmement, la sanctification requiert une consécration totale à Dieu. Paul nous exhorte à offrir nos corps comme un sacrifice vivant, saint et agréable à Dieu (Romains 12:1). Chaque aspect de notre vie - nos pensées, nos paroles, nos actions - doit être soumis au Seigneur." },
        { type: 'paragraph', text: "Troisièmement, la sanctification nécessite une communion constante avec Dieu par la prière et la méditation de sa Parole. C'est dans la présence de Dieu que nous sommes transformés, comme l'affirme 2 Corinthiens 3:18." },
        { type: 'scripture', text: "Nous tous qui, le visage découvert, contemplons comme dans un miroir la gloire du Seigneur, nous sommes transformés en la même image, de gloire en gloire.", reference: "2 Corinthiens 3:18" },
        { type: 'heading', text: "Les Obstacles à la Sanctification" },
        { type: 'paragraph', text: "Plusieurs obstacles peuvent entraver notre sanctification. Le conformisme au monde en est un majeur. L'apôtre Paul nous met en garde : 'Ne vous conformez pas au siècle présent' (Romains 12:2). Le monde a ses valeurs, ses priorités, ses plaisirs - nous devons nous en séparer." },
        { type: 'paragraph', text: "Un autre obstacle est la tiédeur spirituelle. Nous vivons à une époque où beaucoup de chrétiens veulent jouir des promesses de Dieu sans payer le prix de la sanctification. Mais Apocalypse 3:16 nous avertit du danger de la tiédeur." },
        { type: 'heading', text: "Le Fruit de la Sanctification" },
        { type: 'paragraph', text: "Une vie sanctifiée porte du fruit. Ce fruit se manifeste d'abord dans notre caractère - l'amour, la joie, la paix, la patience, et les autres fruits de l'Esprit deviennent visibles dans notre vie." },
        { type: 'paragraph', text: "Le fruit se manifeste aussi dans notre témoignage. Une vie sanctifiée est une prédication silencieuse mais puissante. Les gens voient Christ en nous et sont attirés par la lumière qui émane de notre vie." },
        { type: 'paragraph', text: "Enfin, la sanctification nous prépare pour la gloire éternelle. Dieu nous façonne ici-bas pour nous rendre conformes à l'image de son Fils. Le jour où nous verrons Christ face à face, nous serons entièrement comme lui." },
        { type: 'scripture', text: "Bien-aimés, nous sommes maintenant enfants de Dieu, et ce que nous serons n'a pas encore été manifesté; mais nous savons que, lorsque cela sera manifesté, nous serons semblables à lui, parce que nous le verrons tel qu'il est.", reference: "1 Jean 3:2" },
        { type: 'paragraph', text: "Que le Seigneur nous accorde la grâce de poursuivre ardemment la sanctification, sachant que c'est le chemin de la vie abondante et de la gloire éternelle." }
      ]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);
  const otherArticles = filteredArticles.filter(article => !article.featured);

  if (selectedArticle !== null) {
    const article = articles.find(a => a.id === selectedArticle);
    if (article) {
      return <BlogArticle article={article} onBack={() => setSelectedArticle(null)} />;
    }
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
            Réflexions
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8">
            Blog Spirituel
          </h1>
          <div className="w-16 h-px bg-vivid-green-600 mx-auto"></div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-20 p-12 bg-slate-50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-vivid-green-600 text-sm font-medium tracking-widest uppercase mb-4">
                  Article à la une
                </p>
                <h2 className="text-3xl font-light text-slate-800 mb-6">{featuredArticle.title}</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-8 text-sm text-slate-500 mb-8">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {featuredArticle.date}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(featuredArticle.id)}
                  className="group text-slate-800 hover:text-vivid-green-600 font-medium tracking-wide transition-colors flex items-center"
                >
                  Lire l'article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/8466665/pexels-photo-8466665.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-12 p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-600 hover:text-vivid-green-600 border border-gray-200 hover:border-vivid-green-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="space-y-8 mb-20">
          {otherArticles.map((article) => (
            <div key={article.id} className="group border border-gray-100 p-8 hover:border-amber-600 transition-colors duration-300">
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs text-vivid-green-600 font-medium tracking-widest uppercase">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-3 group-hover:text-vivid-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <User size={14} className="mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2" />
                      {article.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => setSelectedArticle(article.id)}
                    className="group text-slate-600 hover:text-vivid-green-600 font-medium tracking-wide transition-colors flex items-center"
                  >
                    Lire
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-16 bg-slate-50 -mx-6 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-light text-slate-800 mb-6">
              Restez connecté
            </h2>
            <p className="text-slate-600 font-light mb-8">
              Recevez nos derniers articles et réflexions spirituelles.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-200 focus:border-vivid-green-600 focus:outline-none"
              />
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;