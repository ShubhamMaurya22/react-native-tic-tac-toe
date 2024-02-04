// import type { PropsWithChildren } from 'react'


// type soundProps = PropsWithChildren<{
//     soundName : string
// }>

// const sound = ({soundName} : soundProps) => {
//     Sound.setCategory('Playback');

//     var crossSound = new Sound('./sound/cross-sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             console.log('failed to load the sound', error);
//             return;
//         }
        
//     })

//     var circleSound = new Sound('./sound/circle-sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//             console.log('failed to load the sound', error);
//             return;
//         }
//     })

//     const playCicle = () => {
//         circleSound.play((success) => {
//             if (success) {
//             console.log('successfully finished playing');
//             } else {
//             console.log('playback failed due to audio decoding errors');
//             }
//         })
//     }

//     const playCross = () => {
//          crossSound.play((success) => {
//                     if (success) {
//                     console.log('successfully finished playing');
//                     } else {
//                     console.log('playback failed due to audio decoding errors');
//                     }
//                 })
//     }
    
//     switch (soundName) {
//         case 'cross':
//             return (
               
//             ) 
//         case 'circle':
//             return (
               
//             ) 
//         default: 
//         return (
//             circleSound.play((success) => {
//                 if (success) {
//                 console.log('successfully finished playing');
//                 } else {
//                 console.log('playback failed due to audio decoding errors');
//                 }
//             })
//         ) 
//     }

    
// }

// export default sound;