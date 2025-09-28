---
title: Interactive Computing Environments
date: 2025-09-23
tag: Tech
description: Empowering Open Science with Scalable Interactive Computing Environments in India
---

# Empowering Open Science with Scalable Interactive Computing Environments in India

## Introduction

Open Science is transforming how research is conducted, shared, and reused across the globe.  
In India, where diverse scientific communities work on domains ranging from **planetary science** to **meteorology**, the need for scalable, reproducible, and accessible research platforms is stronger than ever.

To address this, I designed and developed a **cloud-native, Free and Open Source Software (FOSS)-powered platform** that lowers the barriers for scientists to adopt open, reproducible workflows.

This blog post outlines the motivation, architecture, and impact of this project.

---

## Challenges in Scientific Computing

Researchers in India face several challenges when working with scientific data and tools:

- Complex setup of software environments across different domains.  
- Limited access to scalable infrastructure.  
- Difficulty in converting computational notebooks into shareable tools.  
- Fragmentation in adopting FOSS workflows.  

These challenges slow down reproducible science and collaboration.  
Our solution aims to solve these problems using open-source technologies.

---

## The Solution: Scalable Interactive Environments

At the core of the platform is **JupyterHub**, deployed on **Kubernetes**, which provides a scalable environment for interactive computing.  
Each researcher logs into a web-based portal and gets access to a **customized containerized workspace**.

Key features:

- **Custom Docker Images**: Domain-specific environments (e.g., planetary science, meteorology) preloaded with required libraries.  
- **Shared Data Volumes**: Mounted with satellite datasets to allow direct access to scientific data.  
- **Secure & Scalable Pods**: Managed by Kubernetes using **KubeSpawner**, ensuring isolation and resource allocation.  

---

## Enhancing Interactivity with Mercury

While Jupyter Notebooks are powerful, sharing results often requires additional steps.  
To bridge this gap, I integrated **Mercury**, an open-source library, into the JupyterLab environment.

### Custom Mercury Enhancements
- Integrated Mercury inside **multi-user JupyterHub setup**.  
- Added support for **RESTful APIs**.  
- Built **custom JupyterLab extensions** to let users create, update, and delete Mercury web apps through a graphical interface.  

This enables researchers to **convert notebooks into web applications** seamlessly, making their analyses interactive and shareable with peers.

---

## Supporting Tools and Integrations

The platform leverages several open-source components:

- **JupyterHub** – Web interface for multi-user access.  
- **Kubernetes + KubeSpawner** – Scalable orchestration of user pods.  
- **Docker** – Containerization of domain-specific environments.  
- **JupyterLab** – Interactive computing workspace.  
- **Jupyter Server Proxy** – Secure access to additional services within JupyterHub.  
- **Mercury (custom build)** – Notebook-to-webapp conversion, enhanced for multi-user workflows.  
- **JupyterLab Extensions** – Simplified UI for managing Mercury apps.  

---

## User Flow

```mermaid
flowchart LR
    A[Researcher Login] --> B[JupyterHub Authentication]
    B --> C[KubeSpawner launches User Pod]
    C --> D[Custom Docker Image Loaded with Domain Libraries]
    D --> E[Shared Satellite Data Volume Mounted]
    E --> F[JupyterLab Interactive Environment]
    F --> G[Jupyter Server Proxy Enables Access to Services]
    G --> H[Mercury Converts Notebook into Web App]
    H --> I[JupyterLab Extensions Manage Web Apps]
    I --> J[Researcher Shares Interactive App with Peers]
