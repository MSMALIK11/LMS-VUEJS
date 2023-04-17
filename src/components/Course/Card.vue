<template>
    <div class="card shadow-md p-4 mt-5">
    <div class="side-info-box shadow-md px-2 py-1">
    <i class="fa-solid fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    </div>
    <div class="best-seller shadow-md bg-success">
    Best Seller
    </div>
<div class="image">

<img :src="course?.image.url" alt="">
</div>
<div class="info">
<router-link :to="`/course/${course.slug}`"><h3 class="course-title ">{{course.title}}</h3></router-link>
<span>{{course?.instructor.name}}</span>
<div class="rating-box mt-3 mb-3">
<div class="rating text-yellow-400">
<span class="rating-count bg-yellow-400 px-2 py-0  text-white rounded-md">4.1</span>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-regular fa-star"></i>
</div>
<div class="enrolled flex">
<span class="dot mr-1 shadow-md"></span>
<span > 99 enrolled</span></div>
</div>
<div class="value felx mt-4">
<span class="mr-1 font-semibold">Price</span>
<del class="mr-3 text-gray-400">$21</del>
<span class="price bg-green-500 rounded-md"><i class="fa-solid fa-circle-check mr-1"></i>Free</span>
</div>

</div>
    </div>
</template>

<script setup>

const props=defineProps(["course"])
console.log('props',props)
</script>

<style scoped>
.card{
    width: 350px;
    background: #fff;
position: relative;
overflow: hidden;
}
.best-seller{
    position: absolute;
    top:5px;
    right: 10px;

color: white;
padding: 2px 10px;
border-radius: 8px;

}

.image{
    height: 170px;
width: 100%;
}
.image img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.info{
    padding: 5px 10px;
}
.course-title{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;

}
.course-title::first-letter{
    text-transform: capitalize;
}
.rating-box{
    display: flex;

    gap: 10px;
justify-content: space-between;
}
.rating{
    display: flex;
    align-items: center;
    gap: 2px;

}
.enrolled{
    display: flex;
}
.dot{
    width: 5px;
    height: 5px;
    background: #000;

border-radius: 50%;
}
.enrolled span:nth-of-type(2){
    color:rgb(156, 143, 143);
text-transform: capitalize;
}

.price{
    padding: 3px 10px;
    color: #fff;
}

.side-info-box{
    position: absolute;
    right:0;
    transform: translateX(100px);
    top: 45px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgba(128, 128, 128, 0.234);
    transition: 0.3s ease-in-out;

}
.card:hover .side-info-box{

      transform: translateX(0);
}
</style>