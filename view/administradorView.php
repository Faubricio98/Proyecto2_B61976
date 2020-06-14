<?php
    include_once 'public/adminHeader.php';
?>

<h3 class="text-center" id="hBienvenida">Bienvenido 
    <?php 
        $userName = $_GET['user'];
        echo $userName;
    ?>
</h3>

<div class="row" style="margin-top: 2em;">
    <div class="col-md-3"></div>
    <div id="actionMenu" class="col-md-6"></div>
    <div class="col-md-3"></div>
    <!--modal para invitar a amigos-->
		<div class="modal fade" id="modInvita" tabindex="-1" role="dialog" aria-labelledby="modInvitaLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="modInvitaLabel"> <img src="public/img/my_icon.svg" style="margin-left: 50px;" width="50" height="60"> Lista de productos</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body table-responsive">
                        <span id="table-products"></span>
					</div>
					<div class="modal-footer">
						<button id="btnCloseMod" type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
					</div>
				</div>
			</div>
		</div>
		<!--modal para invitar a amigos-->
</div>

<?php
    include_once 'public/footer.php';
?>