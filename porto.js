async function experience_card() {
    const ambil_data = await fetch("data_experience.json");
    const data_experience = await ambil_data.json();

    data_experience.forEach(item => {
        const kartu=document.createElement("div");
        kartu.classList= "card-experience";
        kartu.id=`${item.nama_event}`;

        kartu.innerHTML=`
        <table>
            <tr>
                <td id="row-gambar-experience"><img src="${item.dokumentasi}" id="gambar-experience" alt="COMING SOON"></td>
            </tr>
            <tr>
                <td id="row-judul-experience"><h1>${item.nama_event}</h1></td>
            </tr>
            <tr>
                <td id="row-subjudul-experience"><h2>${item.sebagai}</h2>></td>
            </tr>
        </table>
        `
        ;
        document.getElementById("deret-experience-card").appendChild(kartu);


        kartu.addEventListener("click", () => {
            const kartu_deskripsi = document.createElement("div");
            kartu_deskripsi.classList = "deskripsi-experience";
            kartu_deskripsi.id = "deskripsi-experience;"

            kartu_deskripsi.innerHTML=`
            <div class="atas-deskripsi-experience">
                <h1>${item.nama_event}</h1>
                <button class="close-button-deskripsi" id="close-button-deskripsi">x</button>
            </div>
            <div class="isi-deskripsi-experience">
                <p>${item.deskripsi}</p>
            </div>
            ` 
            document.getElementById("pageexperience").appendChild(kartu_deskripsi);

            const closeButtonDeskripsi = document.getElementById("close-button-deskripsi")
            closeButtonDeskripsi.addEventListener("click", () => {
                kartu_deskripsi.remove();
        })
        });
    });
};

experience_card()