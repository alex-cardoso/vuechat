<template>
  <div class="row">
    <div class="col align-self-center w-50 text-center">
      <h2>Chat Vue</h2>
      <hr />
      <div class="text-left">
        <label for="name">Seu nome</label>
        <b-input id="name" placeholder="Seu nome..."></b-input>

        <div
          class="mt-3 p-2 mb-3"
          style="border: solid 1px #efefef;width:100%;height:400px;"
        ></div>

        <label for="message">Mensagem</label>
        <b-input placeholder="Mensagem...."></b-input>

        <b-button variant="outline-success mt-3">Success</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
