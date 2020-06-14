<?php
    include_once 'public/ventasHeader.php';
?>

<script>cargarInicio()</script>

<div class="row" style="margin-top: 2em;">
    <div class="col-md-1"></div>
    <div id="actionMenu" class="col-md-10">
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
					<h4 class="my-0 font-weight-normal">Art&iacute;culo favorito 1</h4>
				</div>
                <script>primerFavorito()</script>
                <div class="card-body">
                    <span id="carta1"></span>
                </div><!---->
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
					<h4 class="my-0 font-weight-normal">Art&iacute;culo favorito 2</h4>
				</div>
                <script>segundoFavorito()</script>
                <div class="card-body">
                    <span id="carta2"></span>
                </div> <!---->
            </div>
            <div class="card mb-4 shadow-sm">
                <div class="card-header">
					<h4 class="my-0 font-weight-normal">Art&iacute;culo favorito 3</h4>
				</div>
                <script>tercerFavorito()</script>
                <div class="card-body">
                    <span id="carta3"></span>
                </div>
            </div>
        </div>
        <span id="respuesta"></span>
    </div>
    <div class="col-md-1"></div>
</div>

<?php
    include_once 'public/footer.php';
?>