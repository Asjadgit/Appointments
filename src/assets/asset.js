// dermatoligist
import derma_icon from './derma_icon.png';
import derma from './derma.png';
import derma2 from './derma2.png';
import derma3 from './derma3.png';
import derma4 from './derma4.png';
import logo from './logo.png';
import profile_pic from './profile_pic.jpg';
import drop_down from './drop_down.png';
import group_pic from './group_pic.png';
import appointment_pic from './appointment_img.png';
import about_pic from './banner2.png';
import contact from './contact.png';

// phsician
import gen_phi_icon from './gen_phi_icon.png';
import gen_phi from './gen_phi.png';
import gen_phi2 from './gen_phi2.png';
import gen_phi3 from './gen_phi3.png';
import gen_phi4 from './gen_phi4.png';

// gynacoloigits
import gyna_icon from './gyna_icon.png';
import gyna from './gyna.png';
import gyna2 from './gyna2.png';
import gyna3 from './gyna3.png';
import gyna4 from './gyna4.png';

// neuroligist
import neuroicon from './neuroicon.png';
import neuro from './neuro.png';
import neuro2 from './neuro2.png';
import neuro3 from './neuro3.png';
import neuro4 from './neuro4.png';

// orthopedics
import ortho_icon from './ortho_icon.png';
import ortho from './ortho.png';
import ortho2 from './ortho2.png';
import ortho3 from './ortho3.png';
import ortho4 from './ortho4.png';

// physical therapist
import phy__thera_icon from './phy__thera_icon.png';
import phy__thera from './phy__thera.png';
import phy__thera2 from './phy_thera2.png';
import phy__thera4 from './phy_thera4.png';

// plastic surgeon
import pltsic_sur_icon from './platsic_sur_icon.png';
import platsic_sur from './platsic_sur.png';
import platsic_sur2 from './platsic_sur2.png';
import platsic_sur3 from './platsic_sur3.png';
import platsic_sur4 from './platsic_sur4.png';

export const assets = {
    logo,
    profile_pic,
    drop_down,
    group_pic,
    appointment_pic,
    about_pic,
    contact
}

export const Specilization = [
    {
        speciliaty: 'Dermatoligist',
        image: derma_icon
    },
    {
        speciliaty: 'General Physician',
        image: gen_phi_icon
    },
    {
        speciliaty: 'Gynacologist',
        image: gyna_icon
    },
    {
        speciliaty:'Neuroligist',
        image: neuroicon
    },
    {
        speciliaty: 'Orthopedics',
        image: ortho_icon
    },
    {
        speciliaty: 'Physical Therapist',
        image: phy__thera_icon
    },
    {
        speciliaty: 'Plastic Surgeon',
        image: pltsic_sur_icon
    }
];

export const doctors = [
    // Dermatologist
    {
        id: 1,
        name: 'Dr. James',
        image: derma,
        degree: 'MBBS, MD (Dermatology)',
        speciliaty: 'Dermatoligist',
        experience: '6 years',
        about: 'Dr. James is an experienced dermatologist specializing in skin treatments and cosmetic procedures.',
        fees: 60,
        address: {
            line1: '16 Road',
            line2: 'City'
        }
    },
    {
        id: 2,
        name: 'Dr. Sarah',
        image: derma3,
        degree: 'MBBS (Dermatology)',
        speciliaty: 'Dermatoligist',
        experience: '4 years',
        about: 'Dr. Sarah has an extensive experience in dermatology, treating various skin conditions including acne, eczema, and psoriasis.',
        fees: 40,
        address: {
            line1: '25 Street',
            line2: 'City'
        }
    },

    // Physician
    {
        id: 3,
        name: 'Dr. Robert',
        image: gen_phi,
        degree: 'MBBS-(General Medicine)',
        speciliaty: 'General Physician',
        experience: '8 years',
        about: 'Dr. Robert is a highly skilled physician focusing on adult health, chronic illness, and disease prevention.',
        fees: 70,
        address: {
            line1: '12 Avenue',
            line2: 'Town'
        }
    },
    {
        id: 4,
        name: 'Dr. Smith',
        image: gen_phi2,
        degree: 'MBBS, MD (General Medicine)',
        speciliaty: 'General Physician',
        experience: '15 years',
        about: 'Dr. Smith specializes in internal medicine, with a particular interest in treating diabetes and hypertension.',
        fees: 105,
        address: {
            line1: '34 Main Street',
            line2: 'Town'
        }
    },

    // Gynecologist
    {
        id: 5,
        name: 'Dr. Laura',
        image: gyna3,
        degree: 'MBBS, MD (Gynecology)',
        speciliaty: 'Gynacologist',
        experience: '10 years',
        about: 'Dr. Laura is an expert gynecologist focusing on women’s reproductive health, pregnancy, and childbirth.',
        fees: 110,
        address: {
            line1: '45 Clinic Road',
            line2: 'City'
        }
    },
    {
        id: 6,
        name: 'Dr. Angela',
        image: gyna2,
        degree: 'MBBS(Gynecology)',
        speciliaty: 'Gynacologist',
        experience: '7 years',
        about: 'Dr. Angela provides comprehensive care in gynecology and obstetrics, specializing in high-risk pregnancies.',
        fees: 70,
        address: {
            line1: '56 Park Avenue',
            line2: 'Town'
        }
    },

    // Neurologist
    {
        id: 7,
        name: 'Dr. Alan',
        image: neuro2,
        degree: 'MBBS, MD (Neurology)',
        speciliaty:'Neuroligist',
        experience: '12 years',
        about: 'Dr. Alan specializes in neurological disorders including stroke, epilepsy, and multiple sclerosis.',
        fees: 100,
        address: {
            line1: '78 Oak Street',
            line2: 'City'
        }
    },
    {
        id: 8,
        name: 'Dr. Noah',
        image: neuro4,
        degree: 'MBBS, MD (Neurology)',
        speciliaty:'Neuroligist',
        experience: '14 years',
        about: 'Dr. Noah has expertise in treating neurodegenerative diseases such as Parkinson’s and Alzheimer’s.',
        fees: 110,
        address: {
            line1: '89 Pine Road',
            line2: 'Town'
        }
    },

    // Orthopedics
    {
        id: 9,
        name: 'Dr. Thomas',
        image: ortho,
        degree: 'MBBS, MS (Orthopedics)',
        speciliaty: 'Orthopedics',
        experience: '5 years',
        about: 'Dr. Thomas is an orthopedic surgeon specializing in joint replacement and sports injuries.',
        fees: 70,
        address: {
            line1: '99 Willow Avenue',
            line2: 'City'
        }
    },
    {
        id: 10,
        name: 'Dr. Rachel',
        image: ortho3,
        degree: 'MBBS, MS',
        speciliaty: 'Orthopedics',
        experience: '10 years',
        about: 'Dr. Rachel is a renowned orthopedic surgeon focuses on bone and joint health, with expertise in treating fractures and spinal disorders.',
        fees: 100,
        address: {
            line1: '102 Elm Street',
            line2: 'Town'
        }
    },

    // Physical Therapist
    {
        id: 11,
        name: 'Dr. Kevin',
        image: phy__thera,
        degree: 'BPT, MPT',
        speciliaty: 'Physical Therapist',
        experience: '5 years',
        about: 'Dr. Kevin is a licensed physical therapist specializing in rehabilitation after surgery and sports injuries.',
        fees: 45,
        address: {
            line1: '113 Cedar Road',
            line2: 'City'
        }
    },
    {
        id: 12,
        name: 'Dr. Robert',
        image: phy__thera2,
        degree: 'BPT, MPT',
        speciliaty: 'Physical Therapist',
        experience: '7 years',
        about: 'Dr. Robert focuses on pain management and recovery, with a specialization in treating back and neck pain.',
        fees: 50,
        address: {
            line1: '124 Birch Avenue',
            line2: 'Town'
        }
    },

    // Plastic Surgeon
    {
        id: 13,
        name: 'Dr. Sophia',
        image: platsic_sur,
        degree: 'MBBS, MCh (Plastic Surgery)',
        speciliaty: 'Plastic Surgeon',
        experience: '8 years',
        about: 'Dr. Sophia is a board-certified plastic surgeon specializing in cosmetic and reconstructive surgery.',
        fees: 150,
        address: {
            line1: '135 Maple Drive',
            line2: 'City'
        }
    },
    {
        id: 14,
        name: 'Dr. Olivia',
        image: platsic_sur2,
        degree: 'MBBS, MCh',
        speciliaty: 'Plastic Surgeon',
        experience: '6 years',
        about: 'Dr. Olivia has extensive experience in aesthetic procedures including rhinoplasty and breast augmentation.',
        fees: 140,
        address: {
            line1: '146 Chestnut Street',
            line2: 'Town'
        }
    }
];
