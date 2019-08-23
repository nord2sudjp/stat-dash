<template>
  <!-- Sidebar -->
  <nav id="sidebar">
    <div class="sidebar-header">
      <h3>統計データ選択</h3>
    </div>

    <ul class="list-unstyled components">
      <li class="active">
        <a
          href="#pageJinkou"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >人口・世帯</a>
        <ul class="collapse list-unstyled" id="pageJinkou">
          <li>
            <router-link :to="{name: 'Content', params:{ statType: '人口'}}">人口総数</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Content', params:{ statType: '人口_男'}}">男</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Content', params:{ statType: '人口_女'}}">女</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="#pageShizen"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >自然環境</a>
        <ul class="collapse list-unstyled" id="pageShizen">
          <li>
            <router-link :to="{name: 'Content', params:{ statType: '面積'}}">面積</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Content', params:{ statType: '可住面積'}}">可住面積</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {};
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

#sidebar p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

#sidebar a,
#sidebar a:hover,
#sidebar a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  min-width: 200px;
  max-width: 200px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  margin-left: -200px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}
</style>


