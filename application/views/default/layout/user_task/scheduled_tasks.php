<div>
	<div>
	<div class="page-title mbot20">
		<h1 class="mleft15">My Scheduled Tasks</h1>
	</div>
    	<div class="mconleft" style="0 0 0 15px;">
          
<div class="title2">Manage your schedule and availability</div>         
       


       <div class="clear"></div>
       
       
       <ul class="ulsty">
               <?php if($result){
			   			 foreach($result as $row) {
					
					
					
					
						$assign_time_pay_amount=0;
						$assign_pay_status=0;
					
						$payable_amount=0;
						
						$check_amount_pay=check_task_assign_amount_pay($row->user_id,$row->task_id);
						
						if($check_amount_pay)
						{
							$assign_pay_status=1;
							$assign_time_pay_amount=$check_amount_pay->task_amount;
						}
						else
						{
							$task_setting=task_setting();
		
						$total=0;
						
						if($row->extra_cost>0) {
						
						$total=$total+$row->extra_cost;
						
						}
						
						
						
						
						if($row->task_worker_id>0)
						{
						 	$price = $this->user_task_model->offer_price($row->task_worker_id,$row->task_id); 					 
						 	$total=$total+$price->offer_amount;
						 
						 }
						 
						 
						 if($task_setting->task_post_fee>0) {
						 
						 $task_site_fee=number_format((($task_setting->task_post_fee*$total) / 100),2); 
					
							 $total=$total+$task_site_fee;
					
						}
						 
						 
						 $total=number_format($total,2);
		 
		 
							$payable_amount= $total;
						}
		
		
		
		
			 
			$user_detail=$this->user_model->get_user_profile_by_id($row->user_id);
				$user_image= base_url().'upload/no_image.png';
				 
				 if($user_detail->profile_image!='') {  
			
					if(file_exists(base_path().'upload/user/'.$user_detail->profile_image)) {
				
						$user_image=base_url().'upload/user/'.$user_detail->profile_image;
						
					}
					
				}
						 ?> 
    
                
                <li>
                    <div class="abct3">
                        <?php echo anchor('user/'.$row->profile_name,'<img src="'.$user_image.'" alt="" width="50" height="50" />',' class="fpass fs13"');?>
                    </div>
                    
                    <div class="catle3n ">
                       <?php 
						if($row->task_activity_status == 3) {
							echo anchor('tasks/'.$row->task_url_name,ucfirst($row->task_name),' class="fpass fs13 lockbg"');
						 } else{ 
						 	echo anchor('tasks/'.$row->task_url_name,ucfirst($row->task_name),' class="fpass fs13 lockbg"');
						 }
					    ?>
                       
                            <p class="colmark marT5">
								<?php if($row->task_activity_status == 3) {
									echo 'has been canceled.';
								  } else {
								  	$task_description= $row->task_description;		
									$task_description=str_replace('KSYDOU','"',$task_description);
									$task_description=str_replace('KSYSING',"'",$task_description);
	
									$strlen = strlen($task_description);
									if($strlen > 50) { echo substr($task_description,0,80).' ...';}
									else { echo $task_description; } 
								  }		                                     
								?>
                            </p>   
                    </div>
                    
                    
                    <?php 
					
					$dispute = $this->dispute_model->check_dispute_task($row->task_id);
					
                        $is_assign = $row->task_activity_status;
                        $status = '';

							$status = '<p>Task Status: <span class="colora"><b>';
                       		 if($is_assign == 1){
                            	if(!empty($dispute)) {
								
									$status .='Dispute';
									
								 } else {
								 
                            		$status .='Assigned';
									
								}
								
							 } elseif($is_assign == 2){
                            	 if(($row->worker_agree == 1) && ($row->poster_agree == 1)) {
							 
                            	$status .='Completed';
								
								} elseif(!empty($dispute)) {
								
									$status .='Dispute';
									
								 } else {
								 	
									$status .='Completed';
								 }
								
							 } elseif($is_assign == 3){
                            	$status .='Closed';
								
							 }elseif($is_assign == 0){
                            	$status .='Posted';
							 }
                       
                    
                     ?>
                     
                    <?php  if($status != '') { ?>
                        <div class="catle3n2">
                            <ul class="ulnobor">
                                <li class="LH16" style="border-bottom:none;">
								
								
										<?php if($assign_pay_status==1 && $assign_time_pay_amount>0 && $is_assign == 1) { ?>
            
          <p class="marB5"><b>Amount Paid : </b><span class="fpass fs14 colora"> <?php echo $site_setting->currency_symbol.$assign_time_pay_amount; ?></span></p>
          
            
            <?php } elseif($is_assign == 1 && $assign_pay_status==0 && $assign_time_pay_amount==0) { ?>
            
              <p class="marB5"><span class="fpass fs14 colora"> <?php echo anchor('user_task/pay_now/'.$row->task_id,'You have to pay Amount '.$site_setting->currency_symbol.$payable_amount,'class="fpass colora"'); ?></span></p>.
            
            <?php } ?>
						
								
								
								<?php echo $status; ?></b></span></p>
                                <p><b>Posted :</b> <span class="geo"><?php  echo date($site_setting->date_time_format,strtotime($row->task_post_date));?></span></p>
                                <?php 
                                    if(($is_assign == 1) || ($is_assign == 2) || ($is_assign == 3)) {
                                        
									
							 if($row->task_worker_id!='' && $row->task_worker_id>0) 
							 { 	
										
										
										$asssign_user = $this->worker_model->get_worker_info($row->task_worker_id);
                                ?>
                                    <p><b>Assigned To:</b> <?php echo anchor('user/'.$asssign_user->profile_name,$asssign_user->first_name.' '.substr($asssign_user->last_name,0,1),'class="fpass"'); ?></p>
                                <?php }
									if(($is_assign == 1) || ($is_assign == 2)) { ?>
                                    <p><b>Assigned :</b>  <span class="geo"><?php echo date($site_setting->date_time_format,strtotime($row->task_assigned_date)); ?></span></p>
                                <?php } 
                                    if($is_assign == 2) {
                                ?>
                                    <p><b>Completed :</b>  <span class="geo"><?php echo date($site_setting->date_time_format,strtotime($row->task_complete_date)); ?></span></p>
                                <?php }  }
								
								
								
                                    if($is_assign == 3) {
                                ?>
                                    <p><b>Closed :</b>  <span class="geo"><?php echo date($site_setting->date_time_format,strtotime($row->task_close_date)); ?></span></p>
                                <?php } ?>
                                </li>
                                <div class="clear"></div>
                            
                              </ul>        
                            
                        </div>
                    <?php } ?>
                    <div class="clear"></div>
            
            
            
            
                   <div class="marTB5">
        	<div class="fl wid100 marL80">
                            <p class="geo"><?php echo getDuration($row->task_post_date,$row->task_id);?> </p>
                            
                     </div>	
                     
                        <div class="fr">
            	<div class="alignright">
	        	
                            
                             <?php 
						
						
				 if($row->task_worker_id!='' && $row->task_worker_id>0) 
				{ 		
								
						if(($is_assign == 1) || ($is_assign == 2) || ($is_assign == 3)) {
									
					 $worker = $this->worker_model->get_worker_info($row->task_worker_id);
					
					 echo anchor('user_task/conversation/'.$row->task_worker_id.'/'.$row->task_id,'Conversation',' class="chbg"');
									
						}		} else {
									$offercount = $this->task_model->count_total_offer_on_task($row->task_id); 
									if($offercount != 0) {
										echo anchor('user_task/worker_offer/0/'.$row->task_id,$offercount.' Offer',' class="chbg"');
									}
								}
					
					
							?>
                            
                            <span class="chbglab">Task Price:<?php echo $site_setting->currency_symbol.$row->task_to_price.' - '.$site_setting->currency_symbol.$row->task_price;?></span>
                            <?php 
								if(($is_assign == 1) || ($is_assign == 2) || ($is_assign == 3)) {
								
						 if($row->task_worker_id!='' && $row->task_worker_id>0) 
						{ 		
						
								$price = $this->user_task_model->offer_price($row->task_worker_id,$row->task_id);
							?>
                            <span class="chbglab2">Final Price:<?php echo $site_setting->currency_symbol.$price->offer_amount;?></span>  
                            <?php } 
							
						} 
						
						if(!empty($dispute)) {
							
							 echo anchor('dispute/dispute_task/'.$row->task_id,'Dispute','class="temp"');
						}?>              
                            </div>
                        </div>
                        <div class="clear"></div>    
                    </div>
                    <div class="clear"></div>
                    
                    
                </li>
               <?php } }?>
               
               
               
            </ul>         
           
                    		        

<?php if($total_rows>10) { ?>
					<div class="gonext">
                    <?php echo $page_link; ?>
                    </div>
				<?php } ?>
                

		</div>


 <?php echo $this->load->view($theme.'/layout/user/user_sidebar'); ?>
   <div class="clear"></div>     
</div>
</div>

           
          	
