<template>
    <div>
     <div className="banner-wraper">
      <div className="banner-details">
        <h1 className="banner-title">
          In-Demand Skills,
          <br />
          On-Demand Course.
        </h1>
        <p className="sub-title">
          Online professional courses, led by the world’s top experts.
        </p>

        <div className="search-box">
          <input type="text" placeholder="What do you want to learn?" />
          <button>Search</button>
        </div>
        <div className="popular-tag">
          <span className="tag-title ">popular</span>

             <span v-for="tag in tags" :key="tag" className="tag-items">{{tag}}</span>;

        </div>
      </div>
    </div>

    </div>
</template>

<script setup>
  const tags = ["SEO", "PHOTSHOP", "FREELANCING", "eCommerce"];

</script>

<style  scoped>

.banner-wraper {
background-image: url('../assets/images/banner.webp');
  height: 70vh;
  background-position: center;
  background-size: cover;
  position: relative;
}
.banner-wraper::before {
  position: absolute;
  content: "";
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 0;
  height: 100%;
}

.banner-details {
  text-align: center;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
}

.banner-title {
  z-index: 9999;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  font-family: "Lora", serif;
}
.sub-title {
  color: #fff;
  z-index: 9999;
  font-family: "Jost", sans-serif;
  letter-spacing: 0.2px;
  margin: 10px 0;
}

.search-box {
  z-index: 999;
  display: flex;
  background-color: #fff;
  width: 410px;
  justify-content: space-between;
  border-radius: 2px;
}

.search-box input {
  width: 70%;
  background-color: #fff;
  border: none;
  outline: none;
  padding: 0 10px;
  font-family: "Jost", sans-serif;
}

.search-box button {
  border: none;
  outline: none;
  padding: 5px 10px;
  background-color: rgba(12, 201, 12, 0.808);
  color: #fff;

  letter-spacing: 0.3px;
  font-family: "Jost", sans-serif;
}

.popular-tag {
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 17px;
}

.tag-title {
  font-size: 18px;
  text-transform: capitalize;
  color: #fff;
}

.tag-items {
  border: 1px solid #fff;
  padding: 3px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #ffffff;
  background: transparent;
  transition: all ease 0.4s;
  display: block;
  cursor: pointer;
}
.tag-items:hover {
  background-color: #fff;
  color: #111;
}

</style>