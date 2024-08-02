import React from 'react'

function Alert(props) {
const capitalize = (word)=>{
const lover = word.toLowerCase();
return lover.charAt(0).toUpperCase() + lover.slice(1);

}


  return (
           props.Alert && <div className={'alert alert-${props.alert.type} alert-dismissible fade show bg-black text-white'} role="alert">
 <strong className=' bg-black text-warning'>{capitalize(props.Alert.type)}</strong>: {props.Alert.msg}
</div>
  )
}

export default Alert
