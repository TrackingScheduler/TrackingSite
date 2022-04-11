function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var start=document.getElementById("start_row"+no);
 var end=document.getElementById("end_row"+no);
 var desc=document.getElementById("desc_row"+no);
	
 var name_data=name.innerHTML;
 var start_data=start.innerHTML;
 var end_data=end.innerHTML;
 var desc_data=desc.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 start.innerHTML="<input type='text' id='start_text"+no+"' value='"+start_data+"'>";
 end.innerHTML="<input type='text' id='end_text"+no+"' value='"+end_data+"'>";
 desc.innerHTML="<input type='text' id='desc_text"+no+"' value='"+desc_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var start_val=document.getElementById("start_text"+no).value;
 var end_val=document.getElementById("end_text"+no).value;
 var desc_val=document.getElementById("desc_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("start_row"+no).innerHTML=start_val;
 document.getElementById("end_row"+no).innerHTML=end_val;
 document.getElementById("desc_row"+no).innerHTML=desc_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_start=document.getElementById("new_start").value;
 var new_end=document.getElementById("new_end").value;
 var new_desc=document.getElementById("new_desc").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='start_row"+table_len+"'>"+new_start+"</td><td id='end_row"+table_len+"'>"+new_end+"</td><td id='desc_row"+table_len+"'>"+new_desc+"</td><td><label>Choose Card Picture</label><br><input type=file></td><td><label>Choose Recipe Card</label><br><input type=file></td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_start").value="";
 document.getElementById("new_end").value="";
 document.getElementById("new_desc").value="";
}

// function tableToCSV()
// {
//     var csv_data = [];
//     var rows = document.getElementsByTagName('tr');
//     for (var i = 0; i < rows.length - 1; i++) {
//         var cols = rows[i].querySelectorAll('td,th');
//         var csvrow = [];
//         for (var j = 0; j < cols.length - 1; j++) {
//             csvrow.push(cols[j].innerHTML);
//         }
//         csv_data.push(csvrow.join(","));
//     }
//     csv_data = csv_data.join('\n');
//     saveSchedule(csv_data);
// }


// function saveSchedule(csv_data)
// {
//     CSVFile = new Blob([csv_data], { type: "text/csv"});
//     var temp_link = document.createElement('a');

//     temp_link.download = "Test.csv";
//     var url = window.URL.createObjectURL(CSVFile);
//     temp_link.href = url;

//     temp_link.style.display = "none";
//     document.body.appendChild(temp_link);

//     temp_link.click();
//     document.body.removeChild(temp.link);
// }

