async function loadWebsiteContent() {
    const { data, error } = await supabaseClient
        .from("site_content")
        .select("content_key, content_value");

    if (error) {
        console.error("Kunne ikke hente innhold fra Supabase:", error);
        return;
    }

    data.forEach(item => {

        // Hero
        if (item.content_key === "hero_label") {
            document.getElementById("hero-label").textContent = item.content_value;
        }

        if (item.content_key === "hero_title") {
            document.getElementById("hero-title").textContent = item.content_value;
        }

        if (item.content_key === "hero_text") {
            document.getElementById("hero-text").textContent = item.content_value;
        }

        if (item.content_key === "hero_button") {
            document.getElementById("hero-button").textContent = item.content_value;
        }


        // Tjenester
        if (item.content_key === "service_1_title") {
            document.getElementById("service-1-title").textContent = item.content_value;
        }

        if (item.content_key === "service_1_text") {
            document.getElementById("service-1-text").textContent = item.content_value;
        }

        if (item.content_key === "service_2_title") {
            document.getElementById("service-2-title").textContent = item.content_value;
        }

        if (item.content_key === "service_2_text") {
            document.getElementById("service-2-text").textContent = item.content_value;
        }

        if (item.content_key === "service_3_title") {
            document.getElementById("service-3-title").textContent = item.content_value;
        }

        if (item.content_key === "service_3_text") {
            document.getElementById("service-3-text").textContent = item.content_value;
        }


        // Kranbil
        if (item.content_key === "crane_title") {
            document.getElementById("crane-title").textContent = item.content_value;
        }

        if (item.content_key === "crane_text") {
            document.getElementById("crane-text").textContent = item.content_value;
        }

        if (item.content_key === "crane_range") {
            document.getElementById("crane-range").textContent = item.content_value;
        }

        if (item.content_key === "crane_capacity") {
            document.getElementById("crane-capacity").textContent = item.content_value;
        }

        if (item.content_key === "crane_location") {
            document.getElementById("crane-location").textContent = item.content_value;
        }

        if (item.content_key === "crane_note") {
            document.getElementById("crane-note").textContent = item.content_value;
        }


        // Om Jankran AS
        if (item.content_key === "about_label") {
            document.getElementById("about-label").textContent = item.content_value;
        }

        if (item.content_key === "about_title") {
            document.getElementById("about-title").textContent = item.content_value;
        }

        if (item.content_key === "about_text_1") {
            document.getElementById("about-text-1").textContent = item.content_value;
        }

        if (item.content_key === "about_text_2") {
            document.getElementById("about-text-2").textContent = item.content_value;
        }

        if (item.content_key === "about_text_3") {
            document.getElementById("about-text-3").textContent = item.content_value;
        }

        // Kontakt
if (item.content_key === "contact_title") {
    document.getElementById("contact-title").textContent = item.content_value;
}

if (item.content_key === "contact_text") {
    document.getElementById("contact-text").textContent = item.content_value;
}

if (item.content_key === "contact_phone") {
    const phone = document.getElementById("contact-phone");
    phone.textContent = item.content_value;
    phone.href = "tel:" + item.content_value.replace(/\s/g, "");
}

if (item.content_key === "contact_email") {
    const email = document.getElementById("contact-email");
    email.textContent = item.content_value;
    email.href = "mailto:" + item.content_value;
}

if (item.content_key === "contact_location") {
    document.getElementById("contact-location").textContent = item.content_value;
}

    });

        // Bilder
    const { data: images, error: imageError } = await supabaseClient
        .from("site_images")
        .select("image_key, image_url");

    if (imageError) {
        console.error("Kunne ikke hente bilder:", imageError);
        return;
    }

images.forEach(image => {

    if (image.image_key === "hero") {
        const hero = document.querySelector(".hero");

        if (hero) {
            hero.style.backgroundImage =
                `linear-gradient(
                    rgba(0, 0, 0, 0.45),
                    rgba(0, 0, 0, 0.45)
                ), url("${image.image_url}")`;
        }
    }

    if (image.image_key === "transport") {
        const transportImage = document.getElementById("transport-image");

        if (transportImage) {
            transportImage.src = image.image_url;
        }
    }

    if (image.image_key === "crane") {
        const craneImage = document.getElementById("crane-image");

        if (craneImage) {
            craneImage.src = image.image_url;
        }
    }

    if (image.image_key === "about") {
        const aboutImage = document.getElementById("about-image");

        if (aboutImage) {
            aboutImage.src = image.image_url;
        }
    }

});
}

loadWebsiteContent();