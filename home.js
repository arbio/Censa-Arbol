riot.tag2('survey-list', '<main class="c-text o-grid o-grid--no-gutter o-panel"> <div class="o-grid__cell o-panel-container" style="padding:0px"> <div if="{about}"> <div class="c-overlay"></div> <div class="o-modal c-text"> <div class="c-card u-centered"> <header class="c-card__header"> <h2 class="c-heading">Censa Arbol 1</h2> </header> <div class="c-card__body"> Censa Árbol es Software Libre y puede ser aprovechado bajo los términos de la licencia GNU GPLv3. </div> <footer class="c-card__footer"> <div class="u-small">Copyright © 2017<br>Equipo de R&D SomosAzucar.Org<br> Bajo encargo de ArbioPeru.Org</div> <button type="button" onclick="{hide_about}" class="c-button c-button--brand">OK</button> </footer> </div> </div> </div> <div if="{selector_especies}"> <div class="c-overlay"></div> <div class="o-modal c-text"> <div class="c-card--menu u-centered"> <header class="c-card__header"> <h2 class="c-heading">Especies</h2> </header> <div class="c-card__body o-panel"> <div each="{especie in especies}" if="{especie.especie}" class="c-card__item" data-fam="{especie.familia}" data-cien="{especie.cientifico}" onclick="{set_especie}">{especie.especie}</div> </div> <footer class="c-card__footer"> <button type="button" onclick="{hide_selector_especies}" class="c-button c-button--brand">Cancelar</button> </footer> </div> </div> </div> <nav class="c-nav c-nav--top c-nav--inline"> <div class="c-text--loud c-nav__content u-large" style="padding-left:10px; padding-right: 0px"> <div onclick="{show_about}" style="font-family: monospace"> <img src="censarbol.png" style="vertical-align:middle; height: 2.9em">Censa Árbol </div> </div> <div class="c-nav__content c-nav__item--right c-text--loud" style="padding-left:0px; padding-right: 10px"> <button hide="{adding_tree}" class="c-button c-button--info u-xlarge c-text c-text--loud" style="color: black; margin-top: .2em" onclick="{add_tree}">&nbsp;+&nbsp;</button> <button show="{adding_tree}" class="c-button c-button--warning u-xlarge c-text" style="color:black; margin-top: .2em" onclick="{commit_tree}">OK</button> </div> </nav> <nav class="c-nav c-nav--bottom c-nav--inline u-centered" hide="{adding_tree}"> <div class="c-nav__content c-text u-small"> {len(trees)} registros </div> </nav> <div ref="tree_list" hide="{adding_tree}" class="o-panel" style="bottom: 3em; top: 3.95em"> <div class="c-card" style="margin-left: auto; margin-right: auto; width: 99%"> <div class="c-card__item--brand c-text u-high" each="{tree in trees}" if="{tree.codigo}" style="padding: 6px; margin-top:5px"> <button data-id="{tree.id}" onclick="{load_tree}" class="c-button c-button--success u-high u-large" style="width: 3em;">#{tree.id}</button> &nbsp;{tree.codigo}&nbsp; <span class="c-badge c-badge--ghost c-badge--rounded" if="{tree.especie}">{tree.especie}</span>&nbsp; <span class="c-badge c-badge--ghost c-badge--rounded" if="{tree.dia}">&#x2300; {tree.dia}cm</span> </div> </div> </div> <div ref="tree_form" show="{adding_tree}" class="o-panel" style="top: 3.95em"> <div class="c-card o-form-element"> <div class="c-card__item u-centered" style="margin-top: 5px"> <button if="{selected_tree}" ref="picButton" id="picButton" onclick="{take_pic}" class="c-button {c-button--success: need_pic()} c-button--rounded u-large u-high">{len(selected_tree.data[\'fotos\'])} fotos - Tomar Nueva</button> <div class="c-text u-small"> </div> <div ref="thumbs"> </div> </div> <div class="c-card__item c-input-group o-field"> <input ref="id" class="c-input c-field u-small" if="{selected_tree}" riot-value="Registro # {selected_tree.id}" disabled> <input ref="codigo" class="c-input c-field" placeholder="Código"> </div> <div class="c-card__item c-input-group__stacked o-field"> <div class="c-input-group"> <div class="o-field"> <input ref="especie" class="c-input c-field" placeholder="Nombre Común"> </div> <button class="c-button u-small" onclick="{show_selector_especies}">Buscar...</button> </div> <input ref="cientifico" class="c-input c-field" placeholder="Nombre Científico"> <input ref="familia" class="c-input c-field" placeholder="Familia"> </div> <div if="{selected_tree}" class="c-card__item c-input-group o-field"> <input ref="lat" onchange="{selected_tree.updateUtm}" class="c-input c-field u-small" placeholder="Latitud"> <input ref="long" onchange="{selected_tree.updateUtm}" class="c-input c-field u-small" placeholder="Longitud"> </div> <div class="c-card__item c-input-group o-field"> <input ref="utm_x" class="c-input c-field u-small" placeholder="Utm X" disabled> <input ref="utm_y" class="c-input c-field u-small" placeholder="Utm Y" disabled> <input ref="utm_zone" class="c-input c-field u-small" placeholder="Zona Utm" disabled> <input ref="utm_south" class="c-input c-field u-small" placeholder="Hemisferio" disabled> </div> <div class="c-card__item c-input-group o-field"> <input ref="circ" class="c-input c-field" oninput="{calc_dia}" placeholder="Circ (cm)" type="number"> <input ref="dia" class="c-input c-field auto-field" placeholder="Diá (cm)" disabled type="number"> <input ref="alt" class="c-input c-field" placeholder="Altura (m)" type="number"> </div> <div class="c-card__item c-input-group o-field"> <select onclick="" ref="fenologia" class="c-input c-field" placeholder="Fenología"> <option value="" selected>Fenología</option> <option value="semillación">Semillación</option> <option value="floración">Floración</option> <option value="fructificación">Fructificación</option> <option value="caída_de_hojas">Caída de hojas</option> </select> <input ref="fechahora" riot-value="{new Date().toLocaleString()}" class="c-input c-field u-small u-centered" placeholder="Fecha / Hora" disabled> </div> <div class="head-field c-card__item c-input-group o-field"> <div class="head-label c-label c-field u-centered u-small">Relevancia</div> <div class="head-label c-label c-field u-centered u-small">Otros</div> </div> <div class="c-card__item c-input-group o-field" style="padding-top:0px"> <select multiple ref="relevancia" class="c-input c-field"> <option value="medicinal">Medicinal</option> <option value="maderable">Maderable</option> <option value="ornamental">Ornamental</option> <option value="frutal">Frutal</option> <option value="sagrado">Sagrado</option> <option value="majestuoso">Majestuoso</option> <option value="fauna">Fauna Silvestre</option> </select> <select multiple ref="otros" class="c-input c-field"> <option value="nidos">Presencia de Nidos</option> <option value="regeneracion">Regeneración Natural</option> <option value="hongos">Presencia de Hongos</option> <option value="pudricion_fuste">Pudrición del Fuste</option> </select> </div> <div class="c-card__item c-input-group o-field"> <textarea ref="obs" class="c-input c-field" placeholder="Observaciones"></textarea> <textarea ref="notas" class="c-input c-field" placeholder="Notas"></textarea> <textarea ref="fotos" class="c-input c-field" placeholder="Fotos" style="display:none"></textarea> </div> <div class="c-card__item c-input-group c-input-group o-field"> <br> <label class="c-toggle c-toggle--error" style="width: 100%; padding: 1em;"> <input ref="careful_toggle" type="checkbox" onchange="{update}"> <div class="c-toggle__track"> <div class="c-toggle__handle"></div> </div> Opciones avanzadas </label> <br> </div> <div if="{this.refs.careful_toggle.checked}" class="c-card__item u-centered"> <br> <button if="{selected_tree}" class="c-button {c-button--success : selected_tree.gps_state==\'Auto\'} {c-button--error : selected_tree.gps_state==\'Manual\'} c-button--rounded u-large u-high" style="width: 80%" onclick="{toggle_gps}">GPS : {selected_tree.gps_state}</button> <br> <br> <hr> <br> <button if="{selected_tree}" class="c-button c-button--error c-button--rounded u-large u-high" style="width: 80%" onclick="{selected_tree.drop}">BORRAR REGISTRO</button> <br><br> </div> </div> </div> </div> </main>', 'survey-list .auto-field::-webkit-input-placeholder,[data-is="survey-list"] .auto-field::-webkit-input-placeholder{ color: #96a8b2; } survey-list ::-webkit-input-placeholder,[data-is="survey-list"] ::-webkit-input-placeholder{ color: white; } survey-list .c-input,[data-is="survey-list"] .c-input{ text-align: center; background-color: #e5eaec; border-color: #96a8b2; } survey-list .head-label,[data-is="survey-list"] .head-label{ color: #96a8b2; padding: 0px !important; border: none; } survey-list .head-field,[data-is="survey-list"] .head-field{ border-bottom: none !important; padding-bottom: 0px; } survey-list #picButton,[data-is="survey-list"] #picButton{ width: 80%; }', '', function(opts) {
var tag, especies, tree, converter, OutputUri;
tag = this;
if (localStorage.getItem("trees") !== null) {
    tag.trees = JSON.parse(localStorage.getItem("trees"));
} else {
    tag.trees = ρσ_list_decorate([]);
}
especies = {};
var ρσ_Iter0 = ρσ_Iterable(tag.trees);
for (var ρσ_Index0 = 0; ρσ_Index0 < ρσ_Iter0.length; ρσ_Index0++) {
    tree = ρσ_Iter0[ρσ_Index0];
    if (tree !== null) {
        if (!(ρσ_in(tree.especie, especies))) {
            especies[ρσ_bound_index(tree.especie, especies)] = (function(){
                var ρσ_d = {};
                ρσ_d["especie"] = tree.especie;
                ρσ_d["cientifico"] = tree.cientifico;
                ρσ_d["familia"] = tree.familia;
                return ρσ_d;
            }).call(this);
        }
    } else {
        tag.trees.splice(tag.trees.indexOf(tree));
    }
}
tag.especies = especies;
converter = new UtmConverter;
OutputUri = "file:///sdcard/DCIM/";
function TreeRecord() {
    if (this.ρσ_object_id === undefined) Object.defineProperty(this, "ρσ_object_id", {"value":++ρσ_object_counter});
    TreeRecord.prototype.__init__.apply(this, arguments);
}
TreeRecord.prototype.__init__ = function __init__() {
    var self = this;
    var id = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? __init__.__defaults__.id : arguments[0];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "id")){
        id = ρσ_kwargs_obj.id;
    }
    if (id !== null) {
        self.id = id;
        self.data = (ρσ_expr_temp = tag.trees)[ρσ_bound_index(id - 1, ρσ_expr_temp)];
        return self;
    }
    self.id = TreeRecord.count + 1;
    TreeRecord.count += 1;
    self.data = {};
    self.data["fotos"] = ρσ_list_decorate([]);
    self.start_gps();
    self.timer = setInterval(function () {
        tag.refs.fechahora.value = (new Date).toLocaleString();
    }, 1e3);
};
if (!TreeRecord.prototype.__init__.__defaults__) Object.defineProperties(TreeRecord.prototype.__init__, {
    __defaults__ : {value: {id:null}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["id"]}
});
TreeRecord.__argnames__ = TreeRecord.prototype.__init__.__argnames__;
TreeRecord.__handles_kwarg_interpolation__ = TreeRecord.prototype.__init__.__handles_kwarg_interpolation__;
TreeRecord.prototype.start_gps = function start_gps() {
    var self = this;
    self.gps_state = "Auto";
    self.watch = navigator.geolocation.watchPosition(self.succeed, self.error, (function(){
        var ρσ_d = {};
        ρσ_d["maximumAge"] = 5e4;
        ρσ_d["timeout"] = 2e4;
        ρσ_d["enableHighAccuracy"] = true;
        return ρσ_d;
    }).call(this));
};
if (!TreeRecord.prototype.start_gps.__argnames__) Object.defineProperties(TreeRecord.prototype.start_gps, {
    __argnames__ : {value: []}
});
TreeRecord.prototype.commit = function commit() {
    var self = this;
    (ρσ_expr_temp = tag.trees)[ρσ_bound_index(self.id - 1, ρσ_expr_temp)] = self.data;
    if (!(ρσ_in(self.data["especie"], tag.especies))) {
        (ρσ_expr_temp = tag.especies)[ρσ_bound_index(self.data["especie"], ρσ_expr_temp)] = (function(){
            var ρσ_d = {};
            ρσ_d["especie"] = self.data["especie"];
            ρσ_d["cientifico"] = self.data["cientifico"];
            ρσ_d["familia"] = self.data["familia"];
            return ρσ_d;
        }).call(this);
    }
};
if (!TreeRecord.prototype.commit.__argnames__) Object.defineProperties(TreeRecord.prototype.commit, {
    __argnames__ : {value: []}
});
TreeRecord.prototype.updateUtm = function updateUtm() {
    var self = this;
    var utmCoords;
    utmCoords = converter.toUtm((function(){
        var ρσ_d = {};
        ρσ_d["coord"] = ρσ_list_decorate([ float(tag.refs.long.value), float(tag.refs.lat.value) ]);
        return ρσ_d;
    }).call(this));
    tag.refs.utm_x.value = tag.selected_tree.data["utm_x"] = utmCoords.coord.x;
    tag.refs.utm_y.value = tag.selected_tree.data["utm_y"] = utmCoords.coord.y;
    tag.refs.utm_zone.value = tag.selected_tree.data["utm_zone"] = utmCoords.zone;
    tag.refs.utm_south.value = tag.selected_tree.data["utm_south"] = (utmCoords.isSouthern) ? "S" : "N";
};
if (!TreeRecord.prototype.updateUtm.__argnames__) Object.defineProperties(TreeRecord.prototype.updateUtm, {
    __argnames__ : {value: []}
});
TreeRecord.prototype.succeed = function succeed(position) {
    var self = this;
    self = tag.selected_tree;
    tag.refs.lat.value = self.data["lat"] = position.coords.latitude;
    tag.refs.long.value = self.data["long"] = position.coords.longitude;
    self.updateUtm();
    color_placeholders();
};
if (!TreeRecord.prototype.succeed.__argnames__) Object.defineProperties(TreeRecord.prototype.succeed, {
    __argnames__ : {value: ["position"]}
});
TreeRecord.prototype.error = function error(ee) {
    var self = this;
    print(ee.message);
};
if (!TreeRecord.prototype.error.__argnames__) Object.defineProperties(TreeRecord.prototype.error, {
    __argnames__ : {value: ["ee"]}
});
TreeRecord.prototype.drop = function drop() {
    var self = this;
    resetFormValues();
    getFormValues(tag.selected_tree);
    save_db();
    tag.adding_tree = false;
    clearWatch(tag.selected_tree);
    delete tag.selected_tree;
    tag.update();
};
if (!TreeRecord.prototype.drop.__argnames__) Object.defineProperties(TreeRecord.prototype.drop, {
    __argnames__ : {value: []}
});
TreeRecord.prototype.__repr__ = function __repr__ () {
        return "<" + __name__ + "." + this.constructor.name + " #" + this.ρσ_object_id + ">";
};
TreeRecord.prototype.__str__ = function __str__ () {
    return this.__repr__();
};
Object.defineProperty(TreeRecord.prototype, "__bases__", {value: []});
TreeRecord.count = null;

TreeRecord.count = len(tag.trees);
this.adding_tree = false;
this.about = false;
function add_tree() {
    tag.adding_tree = true;
    this.refs.careful_toggle.checked = false;
    if (tag.selected_tree === undefined) {
        tag.selected_tree = new TreeRecord;
    } else {
        tag.selected_tree = new TreeRecord;
    }
};

this.add_tree = add_tree;
function calc_dia() {
    if (tag.refs.circ.value !== "") {
        tag.refs.dia.value = Math.round(float(tag.refs.circ.value) / Math.PI);
    } else {
        tag.refs.dia.value = "";
    }
    tag.update();
};

this.calc_dia = calc_dia;
function set_especie(e) {
    tag.refs.especie.value = e.target.innerHTML;
    tag.refs.cientifico.value = e.target.getAttribute("data-cien");
    tag.refs.familia.value = e.target.getAttribute("data-fam");
    hide_selector_especies();
};
if (!set_especie.__argnames__) Object.defineProperties(set_especie, {
    __argnames__ : {value: ["e"]}
});

this.set_especie = set_especie;
function download_data() {
    var filename, uri, encodedUri, link;
    filename = "censa_arbol_db.csv";
    if (window.cordova) {
        uri = OutputUri + filename;
        function success() {
            console.log("Saved.");
        };

        function error(ee) {
            alert(ee);
        };
        if (!error.__argnames__) Object.defineProperties(error, {
            __argnames__ : {value: ["ee"]}
        });

        fileStorage.writeToUri(success, error, uri, csv.encode(tag.trees));
    } else {
        encodedUri = encodeURI(csv.encode(tag.trees));
        link = document.createElement("a");
        link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
        link.setAttribute("download", filename);
        link.click();
    }
};

function toggle_gps(e) {
    if ((tag.selected_tree.gps_state === "Auto" || typeof tag.selected_tree.gps_state === "object" && ρσ_equals(tag.selected_tree.gps_state, "Auto"))) {
        tag.selected_tree.gps_state = "Manual";
        clearWatch(tag.selected_tree);
        tag.refs.long.disabled = false;
        tag.refs.lat.disabled = false;
    } else if ((tag.selected_tree.gps_state === "Manual" || typeof tag.selected_tree.gps_state === "object" && ρσ_equals(tag.selected_tree.gps_state, "Manual"))) {
        if (confirm("Capturar nueva ubicación?")) {
            tag.selected_tree.gps_state = "Auto";
            tag.selected_tree.start_gps();
            tag.refs.long.disabled = true;
            tag.refs.lat.disabled = true;
        }
    }
    tag.update();
};
if (!toggle_gps.__argnames__) Object.defineProperties(toggle_gps, {
    __argnames__ : {value: ["e"]}
});

tag.toggle_gps = toggle_gps;
function save_db() {
    var save_selected = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? save_db.__defaults__.save_selected : arguments[0];
    var ρσ_kwargs_obj = arguments[arguments.length-1];
    if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
    if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "save_selected")){
        save_selected = ρσ_kwargs_obj.save_selected;
    }
    var filename, uri;
    if (save_selected) {
        tag.selected_tree.commit();
    }
    function success() {
    };

    function error(ee) {
        alert(ee);
    };
    if (!error.__argnames__) Object.defineProperties(error, {
        __argnames__ : {value: ["ee"]}
    });

    if (window.cordova) {
        filename = "censa_arbol_log.csv";
        uri = OutputUri + filename;
        fileStorage.appendToUri(success, error, uri, csv.encode(ρσ_list_decorate([ tag.selected_tree.data ]), ",", false) + "\n");
    }
    localStorage.trees = JSON.stringify(tag.trees);
    download_data();
};
if (!save_db.__defaults__) Object.defineProperties(save_db, {
    __defaults__ : {value: {save_selected:true}},
    __handles_kwarg_interpolation__ : {value: true},
    __argnames__ : {value: ["save_selected"]}
});

function commit_tree(e) {
    if ((tag.refs.codigo.value === "" || typeof tag.refs.codigo.value === "object" && ρσ_equals(tag.refs.codigo.value, ""))) {
        deny_pic_button();
        tag.refs.codigo.focus();
        return;
    }
    getFormValues(tag.selected_tree);
    resetFormValues();
    save_db();
    tag.adding_tree = false;
    clearWatch(tag.selected_tree);
    delete tag.selected_tree;
    tag.update();
};
if (!commit_tree.__argnames__) Object.defineProperties(commit_tree, {
    __argnames__ : {value: ["e"]}
});

this.commit_tree = commit_tree;
function load_tree(event) {
    var id, tree, options, item;
    id = event.target.getAttribute("data-id");
    tree = tag.selected_tree = new TreeRecord(id);
    tag.adding_tree = true;
    tree.gps_state = "Manual";
    tag.update();
    tag.refs.lat.disabled = false;
    tag.refs.long.disabled = false;
    tag.refs.careful_toggle.checked = false;
    tag.refs.especie.value = tree.data["especie"] || "";
    tag.refs.cientifico.value = tree.data["cientifico"] || "";
    tag.refs.familia.value = tree.data["familia"] || "";
    tag.refs.codigo.value = tree.data["codigo"] || "";
    tag.refs.alt.value = tree.data["alt"] || "";
    tag.refs.dia.value = tree.data["dia"] || "";
    tag.refs.circ.value = tree.data["circ"] || "";
    tag.refs.fenologia.value = tree.data["fenologia"] || "";
    tag.refs.notas.value = tree.data["notas"] || "";
    tag.refs.obs.value = tree.data["obs"] || "";
    tag.refs.lat.value = tree.data["lat"] || "";
    tag.refs.long.value = tree.data["long"] || "";
    tag.refs.utm_x.value = tree.data["utm_x"] || "";
    tag.refs.utm_y.value = tree.data["utm_y"] || "";
    tag.refs.utm_zone.value = tree.data["utm_zone"] || "";
    tag.refs.utm_south.value = tree.data["utm_south"] || "";
    tag.refs.fechahora.value = tree.data["fechahora"] || "";
    tag.refs.fotos.value = JSON.stringify(tree.data["fotos"]) || "";
    options = ρσ_list_decorate([]);
    var ρσ_Iter1 = ρσ_Iterable(JSON.parse(tree.data["relevancia"] || "[]"));
    for (var ρσ_Index1 = 0; ρσ_Index1 < ρσ_Iter1.length; ρσ_Index1++) {
        item = ρσ_Iter1[ρσ_Index1];
        options.push(item);
    }
    var ρσ_Iter2 = ρσ_Iterable(tag.refs.relevancia.children);
    for (var ρσ_Index2 = 0; ρσ_Index2 < ρσ_Iter2.length; ρσ_Index2++) {
        item = ρσ_Iter2[ρσ_Index2];
        if (ρσ_in(item.value, options)) {
            item.selected = true;
        }
    }
    options = ρσ_list_decorate([]);
    var ρσ_Iter3 = ρσ_Iterable(JSON.parse(tree.data["otros"] || "[]"));
    for (var ρσ_Index3 = 0; ρσ_Index3 < ρσ_Iter3.length; ρσ_Index3++) {
        item = ρσ_Iter3[ρσ_Index3];
        options.push(item);
    }
    var ρσ_Iter4 = ρσ_Iterable(tag.refs.otros.children);
    for (var ρσ_Index4 = 0; ρσ_Index4 < ρσ_Iter4.length; ρσ_Index4++) {
        item = ρσ_Iter4[ρσ_Index4];
        if (ρσ_in(item.value, options)) {
            item.selected = true;
        }
    }
    tag.update();
};
if (!load_tree.__argnames__) Object.defineProperties(load_tree, {
    __argnames__ : {value: ["event"]}
});

this.load_tree = load_tree;
function deny_pic_button() {
    var orig_color, orig_text;
    orig_color = tag.refs.picButton.style.backgroundColor;
    tag.refs.picButton.style.backgroundColor = "red";
    orig_text = tag.refs.picButton.innerHTML;
    tag.refs.picButton.innerHTML = "Asigna un código";
    function restore() {
        tag.refs.picButton.style.backgroundColor = orig_color;
        tag.refs.picButton.innerHTML = orig_text;
        document.removeEventListener("input", restore);
    };

    document.addEventListener("input", restore);
};

function take_pic(e) {
    if (tag.refs.codigo.value) {
        tag.refs.picButton.disabled = true;
        if (navigator.camera) {
            navigator.camera.getPicture(processPic, failPic, (function(){
                var ρσ_d = {};
                ρσ_d["quality"] = 100;
                ρσ_d["sourceType"] = Camera.PictureSourceType.CAMERA;
                ρσ_d["destinationType"] = Camera.DestinationType.FILE_URI;
                return ρσ_d;
            }).call(this));
        } else {
            console.log("NO CAMERA");
        }
    } else {
        deny_pic_button();
        tag.refs.codigo.focus();
    }
};
if (!take_pic.__argnames__) Object.defineProperties(take_pic, {
    __argnames__ : {value: ["e"]}
});

this.take_pic = take_pic;
function need_pic(e) {
    return ρσ_equals(len(tag.selected_tree.data["fotos"]), 0);
};
if (!need_pic.__argnames__) Object.defineProperties(need_pic, {
    __argnames__ : {value: ["e"]}
});

this.need_pic = need_pic;
function show_pic(path) {
    var image;
    image = document.createElement("img");
    image.attributes.src = path;
    alert(path);
    tag.refs.thumbs.appendChild(image);
};
if (!show_pic.__argnames__) Object.defineProperties(show_pic, {
    __argnames__ : {value: ["path"]}
});

function processPic(data) {
    var date, datestring, filename;
    tag.refs.picButton.disabled = false;
    date = new Date;
    datestring = date.toISOString().replace(/-/g, "").replace(/:/g, "").slice(0, 15);
    filename = "censo_" + tag.refs.codigo.value;
    filename = filename.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    filename = ρσ_list_decorate([ filename, datestring ]).join("_") + ".jpg";
    moveFile(data, filename);
    tag.selected_tree.data["fotos"].push(filename);
    tag.refs.fotos.value = JSON.stringify(tag.selected_tree.data["fotos"]);
    tag.update();
};
if (!processPic.__argnames__) Object.defineProperties(processPic, {
    __argnames__ : {value: ["data"]}
});

function moveFile(fileUri, filename) {
    window.resolveLocalFileSystemURL(fileUri, (function() {
        var ρσ_anonfunc = function (fileEntry) {
            window.resolveLocalFileSystemURL(OutputUri, (function() {
                var ρσ_anonfunc = function (dirEntry) {
                    fileEntry.moveTo(dirEntry, filename, onSuccess(fileEntry, dirEntry), failPic);
                };
                if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
                    __argnames__ : {value: ["dirEntry"]}
                });
                return ρσ_anonfunc;
            })(), failPic);
        };
        if (!ρσ_anonfunc.__argnames__) Object.defineProperties(ρσ_anonfunc, {
            __argnames__ : {value: ["fileEntry"]}
        });
        return ρσ_anonfunc;
    })(), failPic);
};
if (!moveFile.__argnames__) Object.defineProperties(moveFile, {
    __argnames__ : {value: ["fileUri", "filename"]}
});

function onSuccess(a, b) {
    console.log("moved " + a.fullPath + " to " + b.fullPath);
};
if (!onSuccess.__argnames__) Object.defineProperties(onSuccess, {
    __argnames__ : {value: ["a", "b"]}
});

function failPic(ee) {
    tag.refs.picButton.disabled = false;
    alert(str(ee));
};
if (!failPic.__argnames__) Object.defineProperties(failPic, {
    __argnames__ : {value: ["ee"]}
});

function getFormValues(tree) {
    var options, item;
    tree.data["id"] = tree.id;
    tree.data["especie"] = tag.refs.especie.value;
    tree.data["cientifico"] = tag.refs.cientifico.value;
    tree.data["familia"] = tag.refs.familia.value;
    tree.data["codigo"] = tag.refs.codigo.value;
    tree.data["alt"] = tag.refs.alt.value;
    tree.data["dia"] = tag.refs.dia.value;
    tree.data["circ"] = tag.refs.circ.value;
    tree.data["fenologia"] = tag.refs.fenologia.value;
    options = ρσ_list_decorate([]);
    var ρσ_Iter5 = ρσ_Iterable(tag.refs.relevancia.selectedOptions);
    for (var ρσ_Index5 = 0; ρσ_Index5 < ρσ_Iter5.length; ρσ_Index5++) {
        item = ρσ_Iter5[ρσ_Index5];
        options.push(item.value);
    }
    tree.data["relevancia"] = str(options);
    options = ρσ_list_decorate([]);
    var ρσ_Iter6 = ρσ_Iterable(tag.refs.otros.selectedOptions);
    for (var ρσ_Index6 = 0; ρσ_Index6 < ρσ_Iter6.length; ρσ_Index6++) {
        item = ρσ_Iter6[ρσ_Index6];
        options.push(item.value);
    }
    tree.data["otros"] = str(options);
    tree.data["notas"] = tag.refs.notas.value;
    tree.data["obs"] = tag.refs.obs.value;
    tree.data["fechahora"] = tag.refs.fechahora.value;
    tree.data["lat"] = tag.refs.lat.value;
    tree.data["long"] = tag.refs.long.value;
    tree.data["utm_x"] = tag.refs.utm_x.value;
    tree.data["utm_y"] = tag.refs.utm_y.value;
    tree.data["utm_zone"] = tag.refs.utm_zone.value;
    tree.data["utm_south"] = tag.refs.utm_south.value;
    tree.data["fotos"] = JSON.parse(tag.refs.fotos.value || ρσ_list_decorate([]));
};
if (!getFormValues.__argnames__) Object.defineProperties(getFormValues, {
    __argnames__ : {value: ["tree"]}
});

function resetFormValues() {
    tag.refs.especie.value = "";
    tag.refs.cientifico.value = "";
    tag.refs.familia.value = "";
    tag.refs.codigo.value = "";
    tag.refs.alt.value = "";
    tag.refs.dia.value = "";
    tag.refs.circ.value = "";
    tag.refs.fenologia.value = "";
    tag.refs.otros.value = "";
    tag.refs.relevancia.value = "";
    tag.refs.notas.value = "";
    tag.refs.obs.value = "";
    tag.refs.lat.value = "";
    tag.refs.long.value = "";
    tag.refs.utm_x.value = "";
    tag.refs.utm_y.value = "";
    tag.refs.utm_south.value = "";
    tag.refs.utm_zone.value = "";
    tag.refs.fechahora.value = "";
    tag.refs.fotos.value = "";
};

function clearWatch(tree) {
    if (tree.watch !== undefined) {
        navigator.geolocation.clearWatch(tree.watch);
    }
    if (tree.timer !== undefined) {
        clearInterval(tree.timer);
    }
};
if (!clearWatch.__argnames__) Object.defineProperties(clearWatch, {
    __argnames__ : {value: ["tree"]}
});

function updateSize() {
};

window.onresize = updateSize;
function show_about() {
    tag.about = true;
    tag.update();
};

this.show_about = show_about;
function show_selector_especies() {
    tag.selector_especies = true;
    tag.update();
};

this.show_selector_especies = show_selector_especies;
function hide_about() {
    tag.about = false;
    tag.update();
};

this.hide_about = hide_about;
function hide_selector_especies() {
    tag.selector_especies = false;
    tag.update();
};

this.hide_selector_especies = hide_selector_especies;
function color_placeholders() {
    var el;
    var ρσ_Iter7 = ρσ_Iterable(document.getElementsByTagName("input"));
    for (var ρσ_Index7 = 0; ρσ_Index7 < ρσ_Iter7.length; ρσ_Index7++) {
        el = ρσ_Iter7[ρσ_Index7];
        if (el.disabled) {
            continue;
        }
        if (el.oninput === null) {
            el.oninput = color_placeholders;
        }
        if (ρσ_equals(len(el.value), 0)) {
            el.style.backgroundColor = "#8acc8d";
        } else {
            el.style.backgroundColor = "#e5eaec";
        }
    }
    var ρσ_Iter8 = ρσ_Iterable(document.getElementsByTagName("textarea"));
    for (var ρσ_Index8 = 0; ρσ_Index8 < ρσ_Iter8.length; ρσ_Index8++) {
        el = ρσ_Iter8[ρσ_Index8];
        if (el.disabled) {
            continue;
        }
        if (el.oninput === null) {
            el.oninput = color_placeholders;
        }
        if (ρσ_equals(len(el.value), 0)) {
            el.style.backgroundColor = "#8acc8d";
        } else {
            el.style.backgroundColor = "#e5eaec";
        }
    }
    var ρσ_Iter9 = ρσ_Iterable(document.getElementsByTagName("select"));
    for (var ρσ_Index9 = 0; ρσ_Index9 < ρσ_Iter9.length; ρσ_Index9++) {
        el = ρσ_Iter9[ρσ_Index9];
        if (el.onchange === null) {
            el.onchange = color_placeholders;
        }
        if ((el.value === "" || typeof el.value === "object" && ρσ_equals(el.value, ""))) {
            el.style.backgroundColor = "#8acc8d";
            el.style.color = "white";
        } else {
            el.style.backgroundColor = "#e5eaec";
            el.style.color = "black";
        }
    }
};

this.on("updated", color_placeholders);
function init() {
    var all_inputs, el;
    all_inputs = list(tag.refs.tree_form.getElementsByTagName("input"));
    function next_input(event) {
        var index, offset;
        index = all_inputs.indexOf(event.target);
        if ((event.keyCode === 13 || typeof event.keyCode === "object" && ρσ_equals(event.keyCode, 13))) {
            offset = 1;
            while (index + offset < len(all_inputs) - 1 && all_inputs[ρσ_bound_index(index + offset, all_inputs)].disabled) {
                offset = offset + 1;
            }
            all_inputs[ρσ_bound_index(index + offset, all_inputs)].focus();
        }
    };
    if (!next_input.__argnames__) Object.defineProperties(next_input, {
        __argnames__ : {value: ["event"]}
    });

    var ρσ_Iter10 = ρσ_Iterable(all_inputs);
    for (var ρσ_Index10 = 0; ρσ_Index10 < ρσ_Iter10.length; ρσ_Index10++) {
        el = ρσ_Iter10[ρσ_Index10];
        el.addEventListener("keyup", next_input);
    }
    document.addEventListener("backbutton", commit_tree, false);
    updateSize();
};

this.on("mount", init);
});
