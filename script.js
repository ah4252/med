// تبديل الوضع بين النهاري والليلي
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode')
        ? '☀️ وضع نهاري'
        : '🌙 وضع ليلي';
    // إعادة تفعيل البحث لتحديث الألوان
    const searchInput = document.getElementById('search-input');
    if (searchInput.value.trim()) {
        searchInput.dispatchEvent(new Event('input'));
    }
});

// بيانات الدروس
const coursesData = {
    1: [
        {   
            title: "Anatomie",
            subLinks: [
                {
                    title: "S01 anatomie",
                    url: "https://drive.google.com/drive/folders/1r0S71KRz98dfuXZwKRYsjik0vESoKRDm?usp=drive_link"
                },
                {
                    title: "S02 anatomie",
                    url: " https://drive.google.com/drive/folders/1__qqv213wgSSVoAqOUYDbUCwt60zZj_K?usp=drive_link"
                }
            ]
        },
        {
            title: "Chimie",
            subLinks: [
                {
                    title: "S01 chimie",
                    url: " https://drive.google.com/drive/folders/1F_2dZ-X19hYq7KAeUwEA375H4XkDLtHy?usp=drive_link"
                },
                {
                    title: "S02 chimie",
                    url: " https://drive.google.com/drive/folders/1_avkkgO-ES5SaunDZ9086ip4AhyPZpuP?usp=drive_link"
                }
            ]
        },
        {
            title: "cytologie",
            subLinks: [
                { 
                    title: "S01 cytologie",
                    url: " https://drive.google.com/file/d/1wyYmcuDRMGrSp2ifLj0Tygcdo5JxJZ7_/view?usp=drive_link"
                },
                {      
                    title: "S02 cytologie",
                    url: " https://drive.google.com/file/d/1f6F4SIaZskAECxDMVgz_HRNJSBJ3UAsG/view?usp=drive_link"
                }  
             ]    
        },
        {
            title: "physiologie",
            subLinks: [
                { 
                    title: "Interaction Ligand- Récepteur physiologie",
                    url: " https://drive.google.com/file/d/1dMeOmgRSFLdFRy8RcATCBPE4ZseusBKR/view?usp=drive_link"
                },
                {
                    title: "Les transports membranaires physiologie",
                    url: " https://drive.google.com/file/d/1dYK58Gbi2spK97ky94zD-_Jmsc_oXfQ8/view?usp=drive_link"
                },
                {
                    title: "Milieu Intérieur physiologie",
                    url: " https://drive.google.com/file/d/1kYU2nGZlXzJiBYzfm-6h50q5VTqK7Jz1/view?usp=drive_link"
                },
                {
                    title: "Bioénergétique physiologie",
                    url: " https://docs.google.com/presentation/d/1XTdv2_aGRQ1768KnUlyj6kolpW6iqvyj/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                },
                {
                    title: "Physiologie de la membrane plasmique ",
                    url: " https://drive.google.com/file/d/1_thP6_hgvvGQ_gayF6v7OuA16rTMFkME/view?usp=drive_link"
                },
                {
                    title: "Système Nerveux Autonome physiologie",
                    url: " https://docs.google.com/presentation/d/17-0msQ0idISNjAqwrn9d6nZzxKEe9a4Y/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                },
                {
                    title: "Organisation du système nerveux et Transmission synaptique physiologie",
                    url: " https://drive.google.com/file/d/1jvqV9W7dt74HPmEQIGDhjdyJoULaapZe/view?usp=drive_link"
                },
                {
                    title: "Physiologie musculaire",
                    url: " https://drive.google.com/file/d/1prj5tiK4P0rXB1w3IMO9st4MfynJAW1G/view?usp=drivesdk"
                },
                {
                    title: "Ration alimentaire physiologie",
                    url: " https://drive.google.com/file/d/1N5r_vUPS9PvwFktQiBAHUO-ncV8E0ETo/view?usp=drivesdk"
                }
            ]
        },
        {
            title: "Histologie",
            subLinks: [
                { 
                    title: "Les épithéliums histologie",
                    url: " https://drive.google.com/file/d/18rOfh9u-jAam4DmzNeLI79t6eUOP42-g/view?usp=drive_link"
                },
                {      
                    title: "Les tissus conjonctifs histologie",
                    url: " https://drive.google.com/file/d/15SuC496z0VhsktYVTgKS0KqGGnNhDYsq/view?usp=drive_link"
                },
                {
                    title: "Tissu Nerveux hstologie",
                    url: " https://docs.google.com/presentation/d/1Mns72Nlh6pwCMeSo5GCzjrsTl3Vt723S/edit?usp=drive_link&ouid=106233026404999643178&rtpof=true&sd=true"
                }             
            ]
        },
        {
            title: "Biochimie",
            subLinks: [
                { 
                    title: "S01 biochimie",
                    url: " https://drive.google.com/drive/folders/1C4Y5CKvhk0e6JRieW6tpLdlM_UCepgnE?usp=drive_link"
                },
                {      
                    title: "S02 biochimie",
                    url: " https://drive.google.com/drive/folders/1_iemCqiWvlBICk4qmx7xun4avsu88-We?usp=drive_link"
                }
            ]
        },
        {
            title: "Sciences Humaines et Sociales (SSH)",
            subLinks: [
                { 
                    title: "Juste S01 SSH",
                    url: " https://drive.google.com/drive/folders/1CSSN_5C27yTZjznP9w7g1yVEWtA4jLd1?usp=drive_link"            
                } 
            ]
        },
        {
            title: "Embryologie",
            subLinks: [
                { 
                    title: "Juste S01 embryologie",
                    url: " https://drive.google.com/drive/folders/1CR7rYcjoJ_BWVZHST3RSoA5GhNSoOMFi?usp=drive_link"
                }
            ]
        },
        {
            title: "Biophysique",
            subLinks: [
                { 
                    title: "S01 biophysique",
                    url: " https://drive.google.com/drive/folders/1CACmLUtv2k1SAW9BSnuuhQ0Vvqa3UUNl?usp=drive_link"
                },
                {
                    title: "S02 biophysique",
                    url: " https://drive.google.com/drive/folders/1_qRmAeoEG0IojG7Xe8X8DcLgx76NOkds?usp=drive_link"
                }
            ]   
        },
        {
            title: "Biostatistiques",
            subLinks: [
                {    
                    title: "S01 Biostatistiques",
                    url: " https://drive.google.com/drive/folders/1C9X0D03QuRhBlOZ8nfswhHm5nw8mAMSj?usp=drive_link"
                },
                {
                    title: "S02 Biostatistiques",
                    url: " https://drive.google.com/drive/folders/1_q7eLd3-2OMKALRFhROGanTHVPNlCGNm?usp=drive_link"
                }         
             ] 
        },                  
    ],
    2: [
        {   
            title: "Immunologie Fondamentale",
            subLinks: [
                {  
                    title: "Immunologie",   
                    url: " https://drive.google.com/drive/folders/10MeHUDYvCFMcpw5v1zlfLvTsMeU-7UPO?usp=drive_link"
                } 
            ]   
        },
        {
            title: "Génétique",
            subLinks: [
                {  
                    title: "Génétique",   
                    url: " https://drive.google.com/drive/folders/1aT4v0RKhXwAGYd5WfhqUWC_aBoW4CbCO?usp=drive_link"                  
                }
            ]   
        },
        {
            title: "Unite01 Appareil Cardio-Respiratoire",
            subLinks: [
                {  
                    title: "Cardio-Respiratoire",   
                    url: " https://drive.google.com/drive/folders/1MlIBzU7im04uuQxQ6E0zZGcIjpgwIbZd?usp=drive_link"                  
                }              
            ]   
        },
        {
            title: "Unite02 Appareil Urinaire",
            subLinks: [
                {  
                    title: "Urinaire",   
                    url: " https://drive.google.com/drive/folders/1v62tdtZp9usmN6dpf5_q3Rncwsl5RiJo?usp=drive_link"                  
                }      
            ]   
        },
        {
            title: "Unite03 Appareil Digestif",
            subLinks: [
                {  
                    title: "Digestif",   
                    url: " https://drive.google.com/drive/folders/1-_8Z1xel4pbo99LyOAdlyeAGYyY7zPBu?usp=drive_link"                  
                }      
            ]   
        },
        {
            title: "Unite04 Appareil Endocrinien",
            subLinks: [
                {  
                    title: "Endocrinien",   
                    url: " https://drive.google.com/drive/folders/1aTX7AZKe_F3WVQFvxReo8kliuQIT_u6D?usp=drive_link"                  
                }      
            ]   
        },
        {
            title: "Unite05 Appareil Nerveux",
            subLinks: [
                {  
                    title: "Nerveux",   
                    url: " https://drive.google.com/drive/folders/1mPRDSvwBI95KI3P8VksSIg05r-7IPxMc?usp=drive_link"                  
                }             
            ]   
        }
    ]
};

// إظهار الدروس حسب السنة
const yearButtons = document.querySelectorAll('.year-btn');
const selectedYearTitle = document.getElementById('selected-year-title');
const coursesList = document.getElementById('courses-list');
const noContentMessage = document.getElementById('no-content-message');

yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        const year = button.dataset.year;
        selectedYearTitle.textContent = `Les cours de la ${year}ème année`;
        coursesList.innerHTML = '';
        noContentMessage.textContent = '';
        if (coursesData[year]) {
            coursesData[year].forEach(course => {
                const listItem = document.createElement('li');
                if (typeof course === 'string') {
                    listItem.textContent = course;
                } else {
                    listItem.textContent = course.title;
                    listItem.classList.add('has-sublinks');
                    const subList = document.createElement('ul');
                    subList.classList.add('sublinks-list');
                    subList.style.display = 'none';
                    course.subLinks.forEach(link => {
                        const subItem = document.createElement('li');
                        const linkElement = document.createElement('a');
                        linkElement.href = link.url;
                        linkElement.target = "_blank";
                        linkElement.textContent = link.title;
                        subItem.appendChild(linkElement);
                        subList.appendChild(subItem);
                    });
                    listItem.appendChild(subList);
                    listItem.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const currentlyVisible = subList.style.display === 'block';
                        document.querySelectorAll('.sublinks-list').forEach(ul => ul.style.display = 'none');
                        subList.style.display = currentlyVisible ? 'none' : 'block';
                    });
                    document.addEventListener('click', () => {
                        subList.style.display = 'none';
                    });
                    subList.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
                coursesList.appendChild(listItem);
            });
        } else {
            noContentMessage.textContent = 'لا يوجد محتوى بعد 😁👍';
        }
    });
});

// --- تعديل قسم البحث فقط ---
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// جمع العناصر التي تحتوي على روابط فقط
const searchableItems = [];

Object.values(coursesData).forEach(year => {
    year.forEach(course => {
        course.subLinks.forEach(subLink => {
            if (subLink.url) {
                searchableItems.push({
                    title: subLink.title,
                    url: subLink.url
                });
            }
        });
    });
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    if (!query) return;

    const filtered = searchableItems.filter(item =>
        item.title.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');

            // إنشاء رابط مباشر
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.textContent = item.title;
            link.style.display = 'block';

            resultItem.appendChild(link);
            searchResults.appendChild(resultItem);
        });
    } else {
        const noResult = document.createElement('div');
        noResult.textContent = 'لم يتم العثور على نتائج.';
        noResult.classList.add('search-result-item');
        searchResults.appendChild(noResult);
    }
});

document.addEventListener('click', e => {
    if (!searchInput.contains(e.target)) {
        searchResults.innerHTML = '';
    }
});
