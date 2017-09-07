<template>
  <div>
    <b-navbar class="mb-4" type="dark" variant="primary" toggleable>
      <b-nav-toggle target="nav_dropdown_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href="#">Yet Another To-do List</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
