// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }),
  )
}

// Product Details Page Functions
function changeImage(thumbnail) {
  const mainImage = document.getElementById("mainImage")
  if (mainImage) {
    mainImage.src = thumbnail.src.replace("100x100", "400x400")

    // Update active thumbnail
    document.querySelectorAll(".thumbnail").forEach((thumb) => {
      thumb.classList.remove("active")
    })
    thumbnail.classList.add("active")
  }
}

function showTab(tabName) {
  // Hide all tab panes
  document.querySelectorAll(".tab-pane").forEach((pane) => {
    pane.classList.remove("active")
  })

  // Remove active class from all tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Show selected tab pane
  const selectedTab = document.getElementById(tabName)
  if (selectedTab) {
    selectedTab.classList.add("active")
  }

  // Add active class to clicked button
  event.target.classList.add("active")
}

// Contact Form Submission
const contactForm = document.querySelector("form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }

    // Simulate form submission
    alert("Thank you for your message! We will get back to you soon.")
    this.reset()
  })
}

// Add to Cart Functionality
const addToCartBtn = document.querySelector(".add-to-cart-btn")
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    const quantity = document.querySelector('input[type="number"]').value
    const color = document.querySelector("select").value

    alert(`Added ${quantity} item(s) in ${color} to cart!`)
  })
}

// Buy Now Functionality
const buyNowBtn = document.querySelector(".buy-now-btn")
if (buyNowBtn) {
  buyNowBtn.addEventListener("click", () => {
    alert("Redirecting to checkout...")
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Filter and Sort functionality for catalog
const filterSelect = document.querySelector(".filter-select")
const sortSelect = document.querySelector(".sort-select")

if (filterSelect) {
  filterSelect.addEventListener("change", function () {
    console.log("Filter changed to:", this.value)
    // Add filter logic here
  })
}

if (sortSelect) {
  sortSelect.addEventListener("change", function () {
    console.log("Sort changed to:", this.value)
    // Add sort logic here
  })
}

// Add loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1"
  })

  img.style.opacity = "0"
  img.style.transition = "opacity 0.3s ease"
})
