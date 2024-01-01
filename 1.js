<script>
  // Fonction pour créer un lien avec mot-clé
  function createKeywordLink(keyword, link) {
    var regex = new RegExp('\\b' + keyword + '\\b', 'gi');
    var paragraphs = document.getElementsByTagName('p');
    
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var paragraphContent = paragraph.innerHTML;
      
      var newContent = paragraphContent.replace(regex, function(match, offset, original) {
        // Ne traitez le mot-clé que s'il apparaît une seule fois dans tout le texte
        if (original.indexOf(keyword) === original.lastIndexOf(keyword)) {
          return '<a href="' + link + '" style="color: red;">' + keyword + '</a>';
        } else {
          return match;
        }
      });

      paragraph.innerHTML = newContent;
    }
  }

  // Fonction pour exécuter le script après le chargement complet de la page
  function runScript() {
    // Ajoutez vos mots-clés et liens ici
    createKeywordLink('English Setter', 'https://www.chiotchaton.com/2024/01/the-graceful-and-intelligent-english.html');
    createKeywordLink('Dog breeds', 'https://www.chiotchaton.com');
    // Ajoutez autant de mots-clés et de liens que nécessaire
  }

  // Attendez que la page soit entièrement chargée avant d'exécuter le script
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    runScript();
  } else {
    document.addEventListener('DOMContentLoaded', runScript);
  }
</script>
