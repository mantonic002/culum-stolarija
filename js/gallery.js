$(document).ready(function () {
  const images = [
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
    { src: "images/product/wooden-cabin.jpeg", alt: "Drvena vikendica" },
    { src: "images/product/custom-wardrobe.jpg", alt: "Plakar po meri" },
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
    { src: "images/product/wooden-cabin.jpeg", alt: "Drvena vikendica" },
    { src: "images/product/custom-wardrobe.jpg", alt: "Plakar po meri" },
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
    { src: "images/product/wooden-cabin.jpeg", alt: "Drvena vikendica" },
    { src: "images/product/custom-wardrobe.jpg", alt: "Plakar po meri" },
    { src: "images/product/kitchen-furniture.jpg", alt: "Kuhinja po meri" },
  ];

  // Generate thumbnails
  const galleryRow = $("#galleryRow");
  images.forEach((image, index) => {
    galleryRow.append(`
      <div class="col-4 col-md-3 col-lg-2">
        <div class="product-thumb">
          <img src="${image.src}" class="img-fluid product-image thumbnail" alt="${image.alt}" data-index="${index}"/>
        </div>
      </div>
    `);
  });

  // Initialize carousel on document load
  const carousel = $("#imageCarousel");
  images.forEach((image) => {
    carousel.append(`
      <div>
        <img src="${image.src}" class="img-fluid carousel-image" alt="${image.alt}"/>
      </div>
    `);
  });

  carousel.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    touchThreshold: 10,
    swipeToSlide: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="bi bi-chevron-right"></i></button>',
    responsive: [{ breakpoint: 768, settings: { arrows: false } }],
  });

  carousel.slick("setPosition");

  // Thumbnail click handler
  $(document).on("click", ".thumbnail", function () {
    const selectedIndex = $(this).data("index");
    $("#imageCarousel").slick("slickGoTo", selectedIndex, true); // Go to image without animation
    $("#imageOverlay").css("display", "flex");
    $("body").addClass("overlay-open");
    $("#imageCarousel").slick("setPosition");
  });

  // Close overlay
  $("#closeOverlay, .image-overlay").on("click", function (e) {
    if (
      e.target.id === "closeOverlay" ||
      $(e.target).hasClass("image-overlay")
    ) {
      $("#imageOverlay").css("display", "none");
      $("body").removeClass("overlay-open");
    }
  });

  // Hide overlay on page load
  $("#imageOverlay").css("display", "none");
});
