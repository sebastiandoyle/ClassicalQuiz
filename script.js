document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const optionsContainer = document.getElementById('optionsContainer');

    // Mock list of files, you will need to fetch this list from your server or list them manually
    const audioFiles = [
        '1731 Bach , Oboe Concerto in D minor, 2nd movement.mp3',
        '1778 Rondo Alla Turca, from Piano Sonata in A.mp3',
        '1928 Ravel - Bolero.mp3',
        '1870 Wagner- Ride of the Valkyries; from \'The Valkyrie\'.mp3',
        '1825 Schubert - Ave Maria.mp3',
        '1845 Wagner - Tannhauser - Arrival of the Guests at Wartburg.mp3',
        '1742 Handel , \'Hallelujah\' (from \'Messiah\').mp3',
        '1903 Sibelius - Valse Triste.mp3',
        '1821 Rossini - The Barber Of Seville - Overture.mp3',
        '1822 Schubert - Symphony No.8 in B minor, \'Unfinished\'.mp3',
        '1786 The Marriage of Figaro - March.mp3',
        '1858 Offenbach- Orpheus in the Underworld.mp3',
        '1864 Offenbach- Barcarolle, from \'The Tales of Hoffmann\'.mp3',
        '1875 Tchaikovsky- Piano Concerto No. 1 in B flat minor, 1st movement (excerpt).mp3',
        '1787 Eine Kleine Nachtmusik, 1st movement.mp3',
        '1892 Tchaikovsky- Waltz of the FLowers, from \'The Nutcracker\'.mp3',
        '1893 Dvorak- Symphony No. 9, \'From the New World\', 2nd Movement.mp3',
        '1865 Brahms- Waltz.mp3',
        '1796 Beethoven- Minuet in G.mp3',
        '1877 Wagner- Siegfried\'s Death and Funeral March; from \'Twilight of the Gods\'.mp3',
        '1872 Bizet- L\'Arlesienne - Intermezzo.mp3',
        '1870 Delibes- Notturno, from \'Coppelia\'.mp3',
        '1867 J. Strauss II- The Blue Danube - Waltz.mp3',
        '1866 Smetna- The Bartered Bride - Overture.mp3',
        '1889 J. Strauss II- Emperor Waltz.mp3',
        '1717 Handel , Water Music, Suite No. 2 in D.mp3',
        '1775 Mozart , Violin Concerto No. 5 in A, 2nd Movement.mp3',
        '1841 Mendelssohn -Spring Song.mp3',
        '1727 Bach , Air (from Orchestral Suite No. 3 in D).mp3',
        '1875 Bizet- Les Toreadors, from \'Carmen\'.mp3',
        '1858 Rubinstein- Melody in F.mp3',
        '1838 Schumann - Traumerei.mp3',
        '1729 Vivaldi , Mandoline Concerto in C, RV 425.mp3',
        '1786 Piano Concerto No. 23 in A, 1st movement.mp3',
        '1801 Beethoven- \'Moonlight\' Sonata, 1st movement.mp3',
        '1899 Sibelius - Finlandia.mp3',
        '1850 Wagner - Lohengin - Prelude to Act 3.mp3',
        '1775 Mozart , Violin Concerto No. 3 in G, 1st movement.mp3',
        '1899 J. Strauss II - Vienna Blood - Waltz.mp3',
        '1887 Rimsky-Korsakov- Alborado, from \'Capriccio Espagnol\'.mp3',
        '1854 Liszt- Les Preludes.mp3',
        '1787 Don Giovanni - Overture.mp3',
        '1848 Schumann - The Merry Peasant.mp3',
        '1721 Bach , Brandenburg Concerto No. 3, 1st movement.mp3',
        '1858 J. Strauss II- Tritsch Tratsch Polka.mp3',
        '1721 Bach , Minuet and Badinerie (from Orchestral Suite No. 2 inB Minor).mp3',
        '1734 Handel , Largo (from \'Xerxes\').mp3',
        '1900 Rimsky-Korsakov - Dance of the Bumble Bee.mp3',
        '1791 Mozart- Clarinet Concerto in A, 2nd movement.mp3',
        '1698 Pachelbel , Canon in D.mp3',
        '1823 Schubert - Ballet Music in G, from \'Rosamunde\'.mp3',
        '1791 Haydn- Symphony No. 94, \'Surprise\', 2nd movement.mp3',
        '1901 Elgar - Pomp and Circumstance - March No. 1.mp3',
        '1749 Handel , Arrival of the Queen of Sheba (from \'Solomon\').mp3',
        '1843 Mendelssohn - Wedding March, from \'A Midsummer Night\'s Dream\'.mp3',
        '1838 Chopin - Polonaise in A, Op.40 No.3, \'Military\'.mp3',
        '1847 Liszt - Liebestraum No.3 in A flat.mp3',
        '1853 Verdi - La Traviata - Prelude to Act 1.mp3',
        '1880 Dvorak- Songs My Mother Taught Me.mp3',
        '1889 Tchaikovsky- The Sleeping Beauty - Introduction.mp3',
        '1886 Grieg- The Last Spring.mp3',
        '1788 Mozart- Symphony No. 40, 1st movement.mp3',
        '1810 Beethoven- Fur Elise.mp3',
        '1739 Handel , Concerto grosso in A minor op. 6 No. 4.mp3',
        '1783 Horn Concerto No. 3 in E flat, 2nd movement.mp3',
        '1886 Dvorak - Slavonic Dance No. 2.mp3',
        '1902 Mahler - Symphony No. 5 - Adagietto.mp3',
        '1734 Bach , Sinfonia in G (from \'Christmas Oratorio\').mp3',
        '1876 Grieg- Morning, from \'Peer Gynt\'.mp3',
        '1685 Purcell , Trumpet Tune and Air.mp3',
        '1875 Smetana- The Moldau.mp3',
        '1797 Haydn- Emporor\'s Hymn, from String Quartet in C.mp3',
        '1811 Schubert - German Dance No.1.mp3',
        '1808 Beethoven- Symphony No. 5, 1st movement.mp3',
        '1894 Massenet - Meditation, from \'Thais\'.mp3',
        '1730 Albinoni , Adagio.mp3',
        '1786 The Marriage of Figaro - Overture.mp3',
        '1866 Suppe- Light Cavalry-Overture.mp3',
        '1868 Brahms- Cradle Song.mp3',
        '1820 Weber - Der Freischutz - Overture.mp3',
        '1778 Flute Concerto No. 2 in D, 2nd movement.mp3',
        '1709 Bach , Toccata in D minor.mp3',
        '1896 R. Strauss - Also sprach Zarathustra - Fanfare.mp3',
        '1894 Dvorak - Humoresque.mp3',
        '1846 Suppe - Poet and Peasant - Overture.mp3',
        '1876 Tchaikovsky- Marche Slave, Op. 31.mp3',
        '1845 Mendelssohn - Violin Concerto in E minor, 2nd movement.mp3',
        '1833 Mendelssohn - Symphony No.4 in A, \'Italian\', 1st movement.mp3',
        '1731 Vivaldi , Flute Concerto in G minor \'La Notte\', VI. Allegro.mp3',
        '1862 Verdi- The Force of Destiny-Overture.mp3',
        '1776 Serenata Notturna.mp3',
        '1842 Verdi - Nabucco - Overture.mp3',
        '1847 Liszt - Hungarian Rhapsody No.2.mp3',
        '1725 Vivaldi , The Four Seasons - Spring.mp3',
        '1796 Haydn- Trumpet Concerto in E flat, 3rd movement.mp3',
        '1785 Piano Concerto No. 21 in C, 2nd movement (\'Elvira Madigan\').mp3',
        '1864 Grieg- I Love You.mp3',
        '1791 Mozart- The Magic Flute - Overture.mp3',
        '1762 Gluck , Dance of the Blessed Spirtis (from \'Orpheus and Eurydice\').mp3',
        '1878 Tchaikovsky- Polonaise, from \'Eugene Onegin\'.mp3'
    ];
    

    let currentFile = '';

    function initializeQuiz() {
        nextQuestion();
    }

    function nextQuestion() {
        currentFile = selectRandomAudioFile();
        playSnippet(currentFile);
        displayOptions(currentFile);
    }

    function selectRandomAudioFile() {
        const randomIndex = Math.floor(Math.random() * audioFiles.length);
        return audioFiles[randomIndex];
    }

    function playSnippet(fileName) {
        audioPlayer.src = `public/audio/${fileName}`;
        audioPlayer.play();
    }

    function displayOptions(correctFile) {
        const incorrectOptions = selectIncorrectOptions(correctFile);
        const options = [correctFile, ...incorrectOptions];
        shuffleArray(options);

        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option.replace('.mp3', '').replace(/_/g, ' ');
            optionButton.classList.add('option');
            optionButton.onclick = () => handleOptionSelect(option);
            optionsContainer.appendChild(optionButton);
        });
    }

    function selectIncorrectOptions(correctFile) {
        let incorrectOptions = [];
        while (incorrectOptions.length < 3) {
            const option = selectRandomAudioFile();
            if (option !== correctFile && !incorrectOptions.includes(option)) {
                incorrectOptions.push(option);
            }
        }
        return incorrectOptions;
    }

    function handleOptionSelect(selectedOption) {
        if (selectedOption === currentFile) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
        nextQuestion();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    initializeQuiz();
});
