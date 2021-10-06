<script>
    import '../styles/hero.module.css'

    let logo = './images/yeakcraft-logo.png'
    let logoHorizontal = './images/yeakcraft-hori.png'
    let slogan = `Survive, build, and fight on Cambodia's largest map`
</script>

<div class="hero">
    <!-- <img src={heroImage} alt="background"/> -->
    <!-- <img src={logoHorizontal} alt="YeakCraft logo" /> -->
    <img src={logo} class="logo" alt="YeakCraft logo" />
    <p class="slogan">
        {slogan}
    </p>
</div>