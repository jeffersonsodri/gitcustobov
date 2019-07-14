<template>
  <v-formulario>
    <v-container class="container" grid-list-md fluid>
      <v-content>
        <h1>Está Pronto Para Fazer Sua Simulação?</h1>

        <v-form class="form" @submit.prevent="grava()">
          <v-expansion-panel class="panel" v-model="panel[0]" expand>
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Iniciais</h2>
              </template>
              <v-flex xs6 sm6 md6>
                <v-text-field
                  name="ano"
                  type="number"
                  v-validate="'required|date_format:yyyy'"
                  :error-messages="errors.collect('ano')"
                  data-vv-name="ano"
                  background-color="white"
                  label="Ano"
                  box
                  v-model="formulario.ano"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>

              <v-flex xs6 sm6 md6>
                <v-text-field
                  background-color="white"
                  label="Fazenda"
                  box
                  v-model="formulario.fazenda"
                  v-validate="'required'"
                  :error-messages="errors.collect('fazenda')"
                  data-vv-name="fazenda"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>

              <v-flex xs6 sm6 md6>
                <v-text-field
                  background-color="white"
                  label="Município"
                  box
                  v-model="formulario.municipio"
                  v-validate="'required'"
                  :error-messages="errors.collect('municipio')"
                  data-vv-name="municipio"
                  required
                  lazy-validation
                ></v-text-field>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[1]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Do Rebanho de Reprodução</h2>
              </template>
              <v-flex md10>
                <div class="text-xs-center">
                  <span class="headline">
                    <b>Touros</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="divider2 text-xs-center">
                      <span>
                        <b>Peso</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-text-field
                      name="touroPesoMedio"
                      type="number"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('touroPesoMedio')"
                      data-vv-name="touroPesoMedio"
                      background-color="white"
                      label="kg/cab"
                      box
                      v-model="formulario.RebanhoDeReproducao.touroPesoMedio"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs3 sm2 md2>
                    <div class="divider2 text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="touroValor"
                      type="number"
                      background-color="white"
                      label="R$/@"
                      box
                      v-model="formulario.RebanhoDeReproducao.touroValor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('touroValor')"
                      data-vv-name="touroValor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs9 sm6 md6>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabeças</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md4>
                        <v-text-field
                          name="touroCabecaInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeReproducao.touroCabecaInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('touroCabecaInicial')"
                          data-vv-name="touroCabecaInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md4>
                        <v-text-field
                          name="touroCabecaFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeReproducao.touroCabecaFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('touroCabecaFinal')"
                          data-vv-name="touroCabecaFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
                <br>

                <div class="text-xs-center">
                  <span class="headline">
                    <b>Vacas</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="divider2 text-xs-center">
                      <span>
                        <b>Peso</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="vacaMatrizPesoMedio"
                      type="number"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('vacaMatrizPesoMedio')"
                      data-vv-name="vacaMatrizPesoMedio"
                      background-color="white"
                      label="kg/cab"
                      box
                      v-model="formulario.RebanhoDeReproducao.vacaMatrizPesoMedio"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs3 sm2 md2>
                    <div class="divider2 text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="vacaMatrizValor"
                      type="number"
                      background-color="white"
                      label="R$/@"
                      box
                      v-model="formulario.RebanhoDeReproducao.vacaMatrizValor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('vacaMatrizValor')"
                      data-vv-name="vacaMatrizValor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs9 sm6 md6>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabeças</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md4>
                        <v-text-field
                          name="vacaMatrizCabecaInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeReproducao.vacaMatrizCabecaInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('vacaMatrizCabecaInicial')"
                          data-vv-name="vacaMatrizCabecaInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md4>
                        <v-text-field
                          name="vacaMatrizCabecaFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeReproducao.vacaMatrizCabecaFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('vacaMatrizCabecaFinal')"
                          data-vv-name="vacaMatrizCabecaFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[2]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados Do Rebanho de Recria</h2>
              </template>
              <v-flex md11>
                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Fêmeas + 36 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="femeas36Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.femeas36Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('femeas36Valor')"
                      data-vv-name="femeas36Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas36PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas36PesoInicial')"
                          data-vv-name="femeas36PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas36PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas36PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas36PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas36PesoFinal')"
                          data-vv-name="femeas36PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas36CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas36CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas36CabecasInicial')"
                          data-vv-name="femeas36CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas36CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas36CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas36CabecasFinal')"
                          data-vv-name="femeas36CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Fêmeas 24-36 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="femeas2436Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.femeas2436Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('femeas2436Valor')"
                      data-vv-name="femeas2436Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas2436PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas2436PesoInicial')"
                          data-vv-name="femeas2436PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas2436PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas2436PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas2436PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas2436PesoFinal')"
                          data-vv-name="femeas2436PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas2436CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas2436CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas2436CabecasInicial')"
                          data-vv-name="femeas2436CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas2436CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas2436CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas2436CabecasFinal')"
                          data-vv-name="femeas2436CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Fêmeas 12-24 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="femeas1224Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.femeas1224Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('femeas1224Valor')"
                      data-vv-name="femeas1224Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas1224PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas1224PesoInicial')"
                          data-vv-name="femeas1224PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas1224PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas1224PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas1224PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas1224PesoFinal')"
                          data-vv-name="femeas1224PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas1224CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas1224CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas1224CabecasInicial')"
                          data-vv-name="femeas1224CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas1224CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas1224CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas1224CabecasFinal')"
                          data-vv-name="femeas1224CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Fêmeas 0-12 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="femeas012Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.femeas012Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('femeas012Valor')"
                      data-vv-name="femeas012Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas012PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas012PesoInicial')"
                          data-vv-name="femeas012PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas012PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas012PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas012PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas012PesoFinal')"
                          data-vv-name="femeas012PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas012CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas012CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas012CabecasInicial')"
                          data-vv-name="femeas012CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="femeas012CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.femeas012CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas012CabecasFinal')"
                          data-vv-name="femeas012CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Machos 0-12 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="machos012Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.machos012Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('machos012Valor')"
                      data-vv-name="machos012Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos012PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos012PesoInicial')"
                          data-vv-name="machos012PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos012PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos012PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos012PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos012PesoFinal')"
                          data-vv-name="machos012PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos012CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos012CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos012CabecasInicial')"
                          data-vv-name="machos012CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos012CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos012CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos012CabecasFinal')"
                          data-vv-name="machos012CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Machos 12-24 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="machos1224Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.machos1224Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('machos1224Valor')"
                      data-vv-name="machos1224Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos1224PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos1224PesoInicial')"
                          data-vv-name="machos1224PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos1224PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos1224PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos1224PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos1224PesoFinal')"
                          data-vv-name="machos1224PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos1224CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos1224CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos1224CabecasInicial')"
                          data-vv-name="machos1224CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos1224CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos1224CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos1224CabecasFinal')"
                          data-vv-name="machos1224CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Machos 24-36 meses</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="machos2436Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.machos2436Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('machos2436Valor')"
                      data-vv-name="machos2436Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos2436PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos2436PesoInicial')"
                          data-vv-name="machos2436PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos2436PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos2436PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos2436PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos2436PesoFinal')"
                          data-vv-name="machos2436PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos2436CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos2436CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos2436CabecasInicial')"
                          data-vv-name="machos2436CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos2436CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos2436CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos2436CabecasFinal')"
                          data-vv-name="machos2436CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Machos + 36 meses Iclusive Tourunos</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="machos36Valor"
                      type="number"
                      background-color="white"
                      label="R$/Kg"
                      box
                      v-model="formulario.RebanhoDeRecria.machos36Valor"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('machos36Valor')"
                      data-vv-name="machos36Valor"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso(kg/cab)</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos36PesoInicial"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos36PesoInicial')"
                          data-vv-name="machos36PesoInicial"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos36PesoInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos36PesoFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos36PesoFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos36PesoFinal')"
                          data-vv-name="machos36PesoFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs10 sm4 md4>
                    <div class="text-xs-center">
                      <span>
                        <b>Cabecas</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos36CabecasInicial"
                          type="number"
                          background-color="white"
                          label="Inicial"
                          box
                          v-model="formulario.RebanhoDeRecria.machos36CabecasInicial"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos36CabecasInicial')"
                          data-vv-name="machos36CabecasInicial"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm4 md5>
                        <v-text-field
                          name="machos36CabecasFinal"
                          type="number"
                          background-color="white"
                          label="Final"
                          box
                          v-model="formulario.RebanhoDeRecria.machos36CabecasFinal"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos36CabecasFinal')"
                          data-vv-name="machos36CabecasFinal"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider">
                  <span>
                    <b>Rebanho Médio Anual Estimado</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs4 sm2 md2>
                    <v-text-field
                      name="rebanhoMedioAnualEstimadoCabeca"
                      type="number"
                      background-color="white"
                      label="Cabeças"
                      box
                      v-model="formulario.rebanhoMedioAnualEstimadoCabeca"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs4 sm2 md2>
                    <v-text-field
                      name="rebanhoMedioAnualEstimadoUA"
                      type="number"
                      background-color="white"
                      label="UA"
                      box
                      v-model="formulario.rebanhoMedioAnualEstimadoUA"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-flex text-xs-center text-sm-center>
                  <v-btn href="#graficos_do_rebanho" color="primary">Ir para Gráficos do Rebanho</v-btn>
                </v-flex>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[3]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados das Receitas - Pró-Labore</h2>
              </template>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Produtor</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Retirada</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="retiradaDoProdutorMes"
                    type="number"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('retiradaDoProdutorMes')"
                    data-vv-name="retiradaDoProdutorMes"
                    background-color="white"
                    label="R$/Mês"
                    box
                    v-model="formulario.DadosDasReceitas.retiradaDoProdutorMes"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Dedicação à Bovinocultura</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="retiradaDoProdutorDedicacaoBovinocultura"
                    type="number"
                    background-color="white"
                    label=" %"
                    box
                    v-model="formulario.DadosDasReceitas.retiradaDoProdutorDedicacaoBovinocultura"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('retiradaDoProdutorDedicacaoBovinocultura')"
                    data-vv-name="retiradaDoProdutorDedicacaoBovinocultura"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Membro da Família</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Retirada</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="retiradaFamiliaMes"
                    type="number"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('retiradaFamiliaMes')"
                    data-vv-name="retiradaFamiliaMes"
                    background-color="white"
                    label="R$/Mês"
                    box
                    v-model="formulario.DadosDasReceitas.retiradaFamiliaMes"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Dedicação à Bovinocultura</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="retiradaFamiliaDedicacaoBovinocultura"
                    type="number"
                    background-color="white"
                    label=" %"
                    box
                    v-model="formulario.DadosDasReceitas.retiradaFamiliaDedicacaoBovinocultura"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('retiradaFamiliaDedicacaoBovinocultura')"
                    data-vv-name="retiradaFamiliaDedicacaoBovinocultura"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[4]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados das Receitas - Bovinos Para Outros Destinos</h2>
              </template>
              <v-flex md12>
                <v-layout align-center justify-center row wrap>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Fêmeas + 36 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="femeas36ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas36ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas36ValorUnitarioRSCabeca')"
                          data-vv-name="femeas36ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs4 sm6 md5>
                            <v-text-field
                              name="femeas36PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas36PesoMedioKGVivo1')"
                              data-vv-name="femeas36PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas36PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs4 sm6 md5>
                            <v-text-field
                              name="femeas36cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas36cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas36cabeca1')"
                              data-vv-name="femeas36cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Fêmeas 24-36 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="femeas2436ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas2436ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas2436ValorUnitarioRSCabeca')"
                          data-vv-name="femeas2436ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas2436PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas2436PesoMedioKGVivo1')"
                              data-vv-name="femeas2436PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas2436PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas2436cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas2436cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas2436cabeca1')"
                              data-vv-name="femeas2436cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <v-layout align-center justify-center row wrap>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Fêmeas 12-24 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="femeas1224ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas1224ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas1224ValorUnitarioRSCabeca')"
                          data-vv-name="femeas1224ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas1224PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas1224PesoMedioKGVivo1')"
                              data-vv-name="femeas1224PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas1224PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas1224cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas1224cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas1224cabeca1')"
                              data-vv-name="femeas1224cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Fêmeas 0-12 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="femeas012ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas012ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('femeas012ValorUnitarioRSCabeca')"
                          data-vv-name="femeas012ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas012PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas012PesoMedioKGVivo1')"
                              data-vv-name="femeas012PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas012PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="femeas012cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.femeas012cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('femeas012cabeca1')"
                              data-vv-name="femeas012cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <v-layout align-center justify-center row wrap>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Machos 0-12 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="machos012ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.machos012ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos012ValorUnitarioRSCabeca')"
                          data-vv-name="machos012ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos012PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos012PesoMedioKGVivo1')"
                              data-vv-name="machos012PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos012PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos012cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos012cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos012cabeca1')"
                              data-vv-name="machos012cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Machos 12-24 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="machos1224ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.machos1224ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos1224ValorUnitarioRSCabeca')"
                          data-vv-name="machos1224ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos1224PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos1224PesoMedioKGVivo1')"
                              data-vv-name="machos1224PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos1224PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos1224cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos1224cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos1224cabeca1')"
                              data-vv-name="machos1224cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <v-layout align-center justify-center row wrap>
                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Machos 24-36 meses</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="machos2436ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.machos2436ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos2436ValorUnitarioRSCabeca')"
                          data-vv-name="machos2436ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos2436PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos2436PesoMedioKGVivo1')"
                              data-vv-name="machos2436PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos2436PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos2436cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos2436cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos2436cabeca1')"
                              data-vv-name="machos2436cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex md6 xs12 sm6>
                    <div class="divider2 text-xs-center">
                      <span class="headline">
                        <b>Machos + 36 meses Iclusive Tourunos</b>
                      </span>
                    </div>
                    <v-divider></v-divider>

                    <v-layout align-center justify-center row wrap>
                      <v-flex xs3 sm3 md3>
                        <div class="text-xs-center">
                          <span>
                            <b>Valor</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-text-field
                          name="machos36ValorUnitarioRSCabeca"
                          type="number"
                          background-color="white"
                          label="R$/cab"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.machos36ValorUnitarioRSCabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('machos36ValorUnitarioRSCabeca')"
                          data-vv-name="machos36ValorUnitarioRSCabeca"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs10 sm8 md8>
                        <div class="text-xs-center">
                          <span>
                            <b>Peso Medio</b>
                          </span>
                        </div>
                        <v-divider></v-divider>
                        <v-layout align-center justify-center row wrap>
                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos36PesoMedioKGVivo1"
                              type="number"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos36PesoMedioKGVivo1')"
                              data-vv-name="machos36PesoMedioKGVivo1"
                              background-color="white"
                              label="kg vivo"
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos36PesoMedioKGVivo"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>

                          <v-flex xs5 sm6 md5>
                            <v-text-field
                              name="machos36cabeca1"
                              type="number"
                              background-color="white"
                              label="cab."
                              box
                              v-model="formulario.DadosDasReceitas.ReceitaAnual.machos36cabeca"
                              v-validate="'required|max:8'"
                              :error-messages="errors.collect('machos36cabeca1')"
                              data-vv-name="machos36cabeca1"
                              required
                              lazy-validation
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>

                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Touros</b>
                  </span>
                </div>
                <v-divider></v-divider>

                <v-layout align-center justify-center row wrap>
                  <v-flex xs3 sm2 md2>
                    <div class="text-xs-center">
                      <span>
                        <b>Valor</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-text-field
                      name="touroValorUnitarioRSCabeca"
                      type="number"
                      background-color="white"
                      label="R$/cab"
                      box
                      v-model="formulario.DadosDasReceitas.ReceitaAnual.touroValorUnitarioRSCabeca"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('touroValorUnitarioRSCabeca')"
                      data-vv-name="touroValorUnitarioRSCabeca"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs10 sm5 md5 ml-2>
                    <div class="text-xs-center">
                      <span>
                        <b>Peso Medio</b>
                      </span>
                    </div>
                    <v-divider></v-divider>
                    <v-layout align-center justify-center row wrap>
                      <v-flex xs4 sm5 md5>
                        <v-text-field
                          name="touroPesoMedioKGVivo1"
                          type="number"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('touroPesoMedioKGVivo1')"
                          data-vv-name="touroPesoMedioKGVivo1"
                          background-color="white"
                          label="kg vivo"
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.touroPesoMedioKGVivo"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs4 sm5 md5>
                        <v-text-field
                          name="tourocabeca1"
                          type="number"
                          background-color="white"
                          label="cab."
                          box
                          v-model="formulario.DadosDasReceitas.ReceitaAnual.tourocabeca"
                          v-validate="'required|max:8'"
                          :error-messages="errors.collect('tourocabeca1')"
                          data-vv-name="tourocabeca1"
                          required
                          lazy-validation
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[5]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Dados das Receitas - Bovinos Para Abate e Consumo Próprio</h2>
              </template>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Fêmeas + 36 meses Para Abate</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="femeas36ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas36ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('femeas36ValorUnitarioRS')"
                    data-vv-name="femeas36ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas36PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas36PesoMedioKGVivo')"
                        data-vv-name="femeas36PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas36PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas36PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas36PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas36PesoMedioCarcaca')"
                        data-vv-name="femeas36PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas36cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas36cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas36cabeca')"
                        data-vv-name="femeas36cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Fêmeas 24-36 meses Para Abate</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="femeas2436ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas2436ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('femeas2436ValorUnitarioRS')"
                    data-vv-name="femeas2436ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas2436PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas2436PesoMedioKGVivo')"
                        data-vv-name="femeas2436PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas2436PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas2436PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas2436PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas2436PesoMedioCarcaca')"
                        data-vv-name="femeas2436PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas2436cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas2436cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas2436cabeca')"
                        data-vv-name="femeas2436cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Fêmeas 12-24 meses Para Abate</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="femeas1224ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas1224ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('femeas1224ValorUnitarioRS')"
                    data-vv-name="femeas1224ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas1224PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas1224PesoMedioKGVivo')"
                        data-vv-name="femeas1224PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas1224PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas1224PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas1224PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas1224PesoMedioCarcaca')"
                        data-vv-name="femeas1224PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="femeas1224cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.femeas1224cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('femeas1224cabeca')"
                        data-vv-name="femeas1224cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Machos 12-24 meses Para Abate</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="machos1224ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos1224ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('machos1224ValorUnitarioRS')"
                    data-vv-name="machos1224ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos1224PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos1224PesoMedioKGVivo')"
                        data-vv-name="machos1224PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos1224PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos1224PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos1224PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos1224PesoMedioCarcaca')"
                        data-vv-name="machos1224PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos1224cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos1224cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos1224cabeca')"
                        data-vv-name="machos1224cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

              <div class="divider2 text-xs-center">
                <span class="headline">
                  <b>Machos 24-36 meses Para Abate</b>
                </span>
              </div>
              <v-divider></v-divider>

              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="machos2436ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos2436ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('machos2436ValorUnitarioRS')"
                    data-vv-name="machos2436ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos2436PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos2436PesoMedioKGVivo')"
                        data-vv-name="machos2436PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos2436PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos2436PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos2436PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos2436PesoMedioCarcaca')"
                        data-vv-name="machos2436PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos2436cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos2436cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos2436cabeca')"
                        data-vv-name="machos2436cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>

              <v-flex text-xs-center>
                <div class="divider2 text-xs-center">
                  <span class="headline">
                    <b>Machos + 36 meses Iclusive Tourunos Para Abate</b>
                  </span>
                </div>
                <v-divider></v-divider>
              </v-flex>
              <v-layout align-center justify-center row wrap>
                <v-flex xs4 sm2 md2>
                  <div class="text-xs-center">
                    <span>
                      <b>Valor</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-text-field
                    name="machos36ValorUnitarioRS"
                    type="number"
                    background-color="white"
                    label="R$/@"
                    box
                    v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos36ValorUnitarioRS"
                    v-validate="'required|max:8'"
                    :error-messages="errors.collect('machos36ValorUnitarioRS')"
                    data-vv-name="machos36ValorUnitarioRS"
                    required
                    lazy-validation
                  ></v-text-field>
                </v-flex>

                <v-flex xs10 sm8 md8>
                  <div class="text-xs-center">
                    <span>
                      <b>Peso Medio</b>
                    </span>
                  </div>
                  <v-divider></v-divider>
                  <v-layout align-center justify-center row wrap>
                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos36PesoMedioKGVivo"
                        type="number"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos36PesoMedioKGVivo')"
                        data-vv-name="machos36PesoMedioKGVivo"
                        background-color="white"
                        label="kg vivo"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos36PesoMedioKGVivo"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos36PesoMedioCarcaca"
                        type="number"
                        background-color="white"
                        label="Carcaça"
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos36PesoMedioCarcaca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos36PesoMedioCarcaca')"
                        data-vv-name="machos36PesoMedioCarcaca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>

                    <v-flex xs4 sm3 md3>
                      <v-text-field
                        name="machos36cabeca"
                        type="number"
                        background-color="white"
                        label="cab."
                        box
                        v-model="formulario.DadosDasReceitas.ReceitaAnualAbate.machos36cabeca"
                        v-validate="'required|max:8'"
                        :error-messages="errors.collect('machos36cabeca')"
                        data-vv-name="machos36cabeca"
                        required
                        lazy-validation
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[6]" expand class="panel">
            <v-expansion-panel-content>
              <template v-slot:header>
                <h2>Outras Receitas</h2>
              </template>

              <v-layout align-center justify-center row wrap>
                <v-flex md4 xs4 sm4>
                  <div class="divider2 text-xs-center">
                    <span>
                      <b>Outros Produtos</b>
                    </span>
                  </div>
                  <v-divider></v-divider>

                  <v-flex xs10 sm4 md4>
                    <v-text-field
                      name="vendaProdutosBovinoculturaCorteValorTotal"
                      type="number"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('vendaProdutosBovinoculturaCorteValorTotal')"
                      data-vv-name="vendaProdutosBovinoculturaCorteValorTotal"
                      background-color="white"
                      label="R$"
                      box
                      v-model="formulario.DadosDasReceitas.vendaProdutosBovinoculturaCorteValorTotal"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>
                </v-flex>

                <v-flex md4 xs4 sm4>
                  <div class="divider2 text-xs-center">
                    <span>
                      <b>Aluguel de Pasto</b>
                    </span>
                  </div>
                  <v-divider></v-divider>

                  <v-flex xs10 sm4 md4>
                    <v-text-field
                      name="receitaAluguelPastoValorTotal"
                      type="number"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('receitaAluguelPastoValorTotal')"
                      data-vv-name="receitaAluguelPastoValorTotal"
                      background-color="white"
                      label="R$"
                      box
                      v-model="formulario.DadosDasReceitas.receitaAluguelPastoValorTotal"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>
                </v-flex>

                <v-flex md4 xs4 sm4>
                  <div class="divider2 text-xs-center">
                    <span>
                      <b>Preço do Boi Gordo</b>
                    </span>
                  </div>
                  <v-divider></v-divider>

                  <v-flex xs10 sm4 md4>
                    <v-text-field
                      name="precoArrobaBoiGordo"
                      type="number"
                      v-validate="'required|max:8'"
                      :error-messages="errors.collect('precoArrobaBoiGordo')"
                      data-vv-name="precoArrobaBoiGordo"
                      background-color="white"
                      label="R$/@"
                      box
                      v-model="formulario.DadosDasReceitas.precoArrobaBoiGordo"
                      required
                      lazy-validation
                    ></v-text-field>
                  </v-flex>
                </v-flex>
              </v-layout>
              <v-flex text-xs-center text-sm-center>
                <v-btn href="#graficos_das_receitas" color="primary">Ir para Gráficos das Receitas</v-btn>
              </v-flex>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-model="panel[7]" expand class="panel">
            <v-expansion-panel-content>
              <v-layout row wrap>
                <v-flex md6 text-xs-center>
                  <v-btn @click="clear" outline color="primary">Limpar</v-btn>
                </v-flex>
                <v-flex md6 text-xs-center>
                  <v-btn type="submit" color="success">Carregar Gráficos{{form}}</v-btn>
                </v-flex>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <panel-graficos-rebanho class="panelGrafico" id="graficos_do_rebanho"/>

          <panel-graficos-receita class="panelGrafico" id="graficos_das_receitas"/>
        </v-form>
      </v-content>
    </v-container>
    <!-- Botão de reduzir os painéis-->
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          absolute
          fab
          transition="slide-y-reverse-transition"
          right
          dark
          color="teal"
          @click="none"
          class="botaoNone"
        >
          <v-icon dark>keyboard_arrow_down</v-icon>
        </v-btn>
      </template>
      <span>Fechar Painéis</span>
    </v-tooltip>
    <v-snackbar v-model="snackbar" right :timeout="4000" top>
      {{ text }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-formulario>
</template>
<script>
import Formulario from "../class/Formulario.js";
import Dictionary from "../class/Dictionary.js";
import PanelGraficosRebanho from "../components/panel/PanelGraficosRebanho.vue";
import PanelGraficosReceita from "../components/panel/PanelGraficosReceita.vue";
export default {
  components: {
    "panel-graficos-rebanho": PanelGraficosRebanho,
    "panel-graficos-receita": PanelGraficosReceita
  },

  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    formulario: new Formulario(),
    forme: "",
    snackbar: false,
    panel: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    text: "Todos os painéis estão fechados!"
  }),

  updated() {
    console.log("update");
  },

  computed: {
    form: function() {
      var db = new Dexie("simulacao");
      db.version(1).stores({
        simulacao: "id,formularioDB"
      });

      db.simulacao
        .get(1)
        .then(f => (this.formulario = new Formulario(f.formularioDB)));
    }
  },

  mounted() {
    this.$validator.localize("pt", new Dictionary());
  },

  methods: {
    grava() {
      this.$validator.validateAll().then(valid => {
        if (!valid) {
          alert("Verifique se todas as informações estão corretas");
        } else {
          var db = new Dexie("simulacao");
          db.version(1).stores({
            simulacao: "id,formularioDB"
          });

          db.simulacao
            .put({ id: 1, formularioDB: this.formulario })
            .then(function() {
              window.location.href = "/#/";
              document.location.reload(true);
            });
        }
      });
    },
    clear() {
      this.formulario = new Formulario();
    },
    // Fecha todos os paineis
    none() {
      var verificaPanel = [1, 1, 1, 1, 1, 1, 1, 0, 1];
      let flag = false;
      //Verifica se todos os painéis estão fechados
      for (let i = 0; i < this.panel.length; i++) {
        if (verificaPanel[i] != this.panel[i]) {
          flag = true;
          break;
        }
      }

      if (!flag) {
        this.snackbar = true;
      } else {
        this.panel = [1, 1, 1, 1, 1, 1, 1, 0, 1];
        this.PanelGraficosRebanho.panel = [1];
      }
    }
  }
};
</script>
<style scoped>
h2 {
  color: #00695c;
}

.botaoNone {
  border: solid black 1px;
  position: fixed;
  margin-bottom: 0;
  z-index: 997;
  bottom: 45px;
  right: 24px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

@media screen and (max-width: 991px) {
  h2 {
    color: #00695c;
  }
  .container {
    position: relative;
    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }

  .panel {
    margin-top: 1%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 15px black;
  }
  .form {
    margin-top: 2%;

    min-width: 100%;
  }
  .text-field {
    background-color: blue;
    font-size: 2px;
  }
  .flex {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
  }
  .button {
    float: right;
  }
  .divider {
    text-align: center;
    font-size: 130%;
    color: #00695c;
  }
  .divider2 text-xs-center {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 110%;
  }
}

@media screen and (min-width: 992px) {
  h2 {
    color: #00695c;
  }
  .container {
    margin-top: 2%;
    position: absolute;
    text-align: center;

    background-color: #00695c;
    min-height: 100vh;
    max-width: none;

    color: azure;
  }
  .panel {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    padding-bottom: 1%;
    background-color: white;
    box-shadow: 0 4px 10px black;
  }
  .panelGrafico {
    width: 70%;
  }
  .flex {
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
  }

  .button {
    float: right;
  }

  .divider {
    text-align: center;
    font-size: 180%;
    color: #00695c;
  }
  .divider2 text-xs-center {
    font-size: 150%;
    margin-top: 5%;
    margin-left: 5%;
  }
  .layout {
    padding-left: 5%;
    padding-right: 5%;
  }
}
</style>
